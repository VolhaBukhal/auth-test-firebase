import { useAppSelector } from "./redux.hooks";

export const useAuth = () => {
  const { email, token, id } = useAppSelector((store) => store.userSlice);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
