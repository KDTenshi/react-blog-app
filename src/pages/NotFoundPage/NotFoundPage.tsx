import { FC } from "react";
import style from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <main className={style.NotFound}>
      <h2 className={style.Title}>The requested page probably does not exist</h2>
      <p className={style.Text}>
        You can go to{" "}
        <Link to={"/"} className={style.Link}>
          Home Page
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
