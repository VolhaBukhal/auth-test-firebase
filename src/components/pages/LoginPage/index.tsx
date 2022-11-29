import { Link } from "react-router-dom";
import { routes } from "constants/index";
import { Login } from "components/Login";

export const LoginPage = () => {
  return (
    <>
      <h3>Login Page</h3>
      <p>Please, Login!</p>
      <Login />
      <hr />
      <Link to={routes.REGISTER}>Please, register first!</Link>
    </>
  );
};
