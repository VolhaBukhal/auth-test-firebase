import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "components/Form";
import { useAppDispatch } from "hooks/redux.hooks";
import { setCredentials } from "store/slices/userSlice";
import { routes } from "constants/index";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignUp = (email: string, password: string) => {
    console.log("key: ", process.env.REACT_APP_FIREBASE_API_KEY);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        let userAccessToken;
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
        alert(error.message);
      });
  };

  return <Form title="sign up" handleForm={handleSignUp} />;
};
