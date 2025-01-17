import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import PostPage from "../../pages/PostPage/PostPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import UserPage from "../../pages/UserPage/UserPage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/users/:id" element={<UserPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to={"/not-found"} />} />
    </Routes>
  );
};

export default AppRouter;
