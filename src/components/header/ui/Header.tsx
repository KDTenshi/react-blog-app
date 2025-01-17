import { FC } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <Link to={"/"} className={style.Link}>
        <h1 className={style.Title}>React Blog App</h1>
      </Link>
    </header>
  );
};

export default Header;
