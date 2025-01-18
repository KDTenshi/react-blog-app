import { FC } from "react";
import style from "./Pagination.module.css";
import { MAX_PAGE_NUMBER } from "../../../constants/constants";

interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, setPage }) => {
  const toNextPage = () => {
    if (currentPage < MAX_PAGE_NUMBER) {
      setPage(currentPage + 1);
    }
  };

  const toPrevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  return (
    <div className={style.Pagination}>
      <button className={style.Arrow} onClick={toPrevPage}>
        {"<<"}
      </button>
      <div className={style.Pages}>
        {[...new Array(MAX_PAGE_NUMBER)].map((_, index) => (
          <button
            className={[style.Page, index + 1 === currentPage ? style.Page_Active : ""].join(" ")}
            key={index}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button className={style.Arrow} onClick={toNextPage}>
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
