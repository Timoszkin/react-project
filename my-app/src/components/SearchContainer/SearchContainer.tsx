import {
  useRef,
  FormEvent,
  useCallback,
  useEffect,
  useState,
  ChangeEvent,
} from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { debounce } from "../../app/utils";
import SuggestionsList from "./SuggestionsList/SuggestionsList";
import { addHistoryLocalStore } from "../../app/utils";
import { RootState } from "../../store/store";
import { ReactComponent as Icon } from "./icon.svg";
import "./SearchContainer.css";
import { addNewHistory } from "../../store/slices/history/historySlice";
import { nanoid } from "@reduxjs/toolkit";

const DEBOUNCE_DELAY = 800;

function SearchContainer() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUserID = useSelector(
    (state: RootState) => state.userSlice.id,
    shallowEqual
  );

  const hideSuggestionsOnOuterClick = (event: MouseEvent) => {
    if (!searchRef?.current?.contains(event.target as Node)) {
      setShowSuggestions(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", hideSuggestionsOnOuterClick);
    return () =>
      document.removeEventListener("click", hideSuggestionsOnOuterClick);
  }, []);

  const debouncedSetSearchValue = useCallback(
    debounce(setSearchValue, DEBOUNCE_DELAY),
    []
  );
  useEffect(() => {
    debouncedSetSearchValue(inputValue);
  }, [inputValue]);

  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (searchValue.length !== 0) {
        navigate(`/search?query=${searchValue.trim().replaceAll(" ", "+")}`);
        dispatch(addNewHistory({ id: nanoid(), query: searchValue }));
        addHistoryLocalStore(currentUserID, searchValue);
        setShowSuggestions(false);
        inputRef.current?.blur();
        setInputValue("");
      }
    },
    [searchValue]
  );

  return (
    <div className="search">
      <div className="search__inner" ref={searchRef}>
        <form className="search-form" onSubmit={handleFormSubmit}>
          <input
            className="search-form__input"
            type="text"
            placeholder="Search movie"
            value={inputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setInputValue(event.target.value)
            }
            onFocus={() => setShowSuggestions(true)}
            ref={inputRef}
          />
          <button className="search-form__btn" type="submit">
            <Icon />
          </button>
        </form>

        {searchValue && showSuggestions && (
          <SuggestionsList searchValue={searchValue} />
        )}
      </div>
    </div>
  );
}

export default SearchContainer;
