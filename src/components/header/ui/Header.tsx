import { FC } from "react";
import style from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <h1 className={style.Title}>React Blog App</h1>
    </header>
  );
};

export default Header;
