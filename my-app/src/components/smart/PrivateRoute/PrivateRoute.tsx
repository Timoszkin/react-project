import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../../app/store";

type Props = {
    component: JSX.Element;
    redirectPath: string;
  };

const PrivateRoute = ({ redirectPath, component }: Props): JSX.Element => {

    const userEmail = useSelector((state: RootState)=>state.userSlice.email)
    const isLoggedIn = Boolean(userEmail)
    
  if (isLoggedIn) {
    return component;
  }

  return <Navigate to={redirectPath} />;
};

export default PrivateRoute;