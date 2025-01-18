import { FC } from "react";
import style from "./Preloader.module.css";

const Preloader: FC = () => {
  return (
    <div className={style.Preloader}>
      <div className={style.Spinner}></div>
      <h2 className={style.Title}>Loading, please wait...</h2>
    </div>
  );
};

export default Preloader;
