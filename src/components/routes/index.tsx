import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import UserDetailPage from "../pages/UserDetail";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
