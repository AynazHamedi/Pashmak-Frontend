import { Routes, Route } from "react-router-dom";
import Signup from "../pages/SignupPage";
import routes from "./Routes";

function AppRouter() {
  return (
    <Routes>
      <Route path={routes.signup} element={<Signup />} />
    </Routes>
  );
}

export default AppRouter;
