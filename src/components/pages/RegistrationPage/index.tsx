import { Link } from "react-router-dom";
import { routes } from "constants/index";
import { SignUp } from "components/SignUp";
import { GoogleLogin } from "components/GoogleLogin";

export const RegistrationPage = () => {
  return (
    <>
      <h3>Register, please!</h3>
      <SignUp />
      <GoogleLogin />
      <div>Already has an account?</div>
      <hr />
      <Link to={routes.LOGIN}>Please, login!</Link>
    </>
  );
};
