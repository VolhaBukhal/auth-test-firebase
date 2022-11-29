import { useAppDispatch } from "hooks/redux.hooks";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "store/slices/userSlice";
import { routes } from "constants/index";
import { provider } from "../../firebase";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const GoogleLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        if (token) {
          dispatch(
            setCredentials({
              email: user.email,
              token: token,
              id: user.uid,
            })
          );
          navigate(routes.HOME);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return <button onClick={handleGoogleLogin}>login with google</button>;
};
