import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <h2>Welcome to firebase authorization test!</h2>
      </header>
      <Outlet />
    </>
  );
};
