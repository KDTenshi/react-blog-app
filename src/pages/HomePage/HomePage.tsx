import { FC } from "react";
import style from "./HomePage.module.css";
import { PostCardsWithPagination } from "../../components/postCardsWithPagination";

const HomePage: FC = () => {
  return (
    <main className={style.Home}>
      <PostCardsWithPagination />
    </main>
  );
};

export default HomePage;
