import { Link } from "react-router-dom";
import { routes } from "constants/index";
import { useAuth } from "hooks/useAuth";
import { useAppDispatch } from "hooks/redux.hooks";
import { removeCredentials } from "store/slices/userSlice";
import { TodoList } from "components/TodoList/index";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();

  const handleLogout = () => {
    dispatch(removeCredentials());
  };

  return (
    <>
      {isAuth ? (
        <>
          <p>Welcome to the app, {email}</p>
          <button onClick={handleLogout}>Logout {email}</button>
          <hr />
          <TodoList />
        </>
      ) : (
        <Link to={routes.LOGIN}>Login first, please</Link>
      )}
    </>
  );
};
