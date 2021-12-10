import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AuthForm from "./pages/AuthForm/AuthForm";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Movie from "./pages/Movie/Movie";
import Favorites from "./pages/Favorites/Favorites";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Err404 from "./pages/Err404/Err404";
import { ThemeContext } from "./context/ThemeProvider";
import History from "./pages/History/History";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "App" : "App_dark"}>
      <ErrorBoundary>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/signin" element={<AuthForm isLoginPage={true} />} />
            <Route path="/signup" element={<AuthForm isLoginPage={false} />} />
            <Route
              path="/history"
              element={
                <PrivateRoute component={<History />} redirectPath="/signin" />
              }
            />
            <Route path="/search" element={<Search />} />
            <Route
              path="/favourites"
              element={
                <PrivateRoute
                  component={<Favorites />}
                  redirectPath="/signin"
                />
              }
            />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Err404 />} />
          </Routes>
        </div>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
