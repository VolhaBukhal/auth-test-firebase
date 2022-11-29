import { useAppDispatch } from "hooks/redux.hooks";
import { useNavigate } from "react-router-dom";
import { Form } from "components/Form";
import { GoogleLogin } from "components/GoogleLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setCredentials } from "store/slices/userSlice";
import { routes } from "constants/index";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        let userAccessToken = "";
        try {
          userAccessToken = await user.getIdToken();
        } catch (err) {
          throw err;
        }
        dispatch(
          setCredentials({
            email: user.email,
            token: userAccessToken,
            id: user.uid,
          })
        );
        navigate(routes.HOME);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <>
      <Form title="login" handleForm={handleLogin} />;
      <GoogleLogin />
    </>
  );
};
