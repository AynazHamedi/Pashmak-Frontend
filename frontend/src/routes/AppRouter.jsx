import { Routes, Route } from "react-router-dom";
import routes from "./Routes";
import Login from "../pages/Login";
import ChangePassword from "../pages/ChangePassword";
import CompleteProfile from "../pages/CompleteProfile";

function AppRouter() {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.changePassword} element={<ChangePassword />} />
      <Route path={routes.completeProfile} element={<CompleteProfile />} />
    </Routes>
  );
}

export default AppRouter;
