import { FC } from "react";
import "../style/App.css";
import { Header } from "../../components/header";
import { PostCardsWithPagination } from "../../components/postCardsWithPagination";

const App: FC = () => {
  return (
    <>
      <Header />
      <PostCardsWithPagination />
    </>
  );
};

export default App;
