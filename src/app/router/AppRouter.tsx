import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import PostPage from "../../pages/PostPage/PostPage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
