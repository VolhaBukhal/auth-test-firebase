import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { routes } from "constants/index";
import { HomePage } from "components/pages/HomePage";
import { LoginPage } from "components/pages/LoginPage";
import { RegistrationPage } from "components/pages/RegistrationPage";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.REGISTER} element={<RegistrationPage />} />
        </Route>
      </Routes>
    </div>
  );
};
