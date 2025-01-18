import { FC, PropsWithChildren } from "react";
import Pagination from "./Pagination";
import style from "./Pagination.module.css";

interface PaginationWrapperProps {
  currentPage: number;
  setPage: (page: number) => void;
  top?: boolean;
  bottom?: boolean;
}

const PaginationWrapper: FC<PropsWithChildren<PaginationWrapperProps>> = ({
  currentPage,
  setPage,
  top = false,
  bottom = true,
  children,
}) => {
  return (
    <div className={style.Wrapper}>
      {top && <Pagination currentPage={currentPage} setPage={setPage} />}
      {children}
      {bottom && <Pagination currentPage={currentPage} setPage={setPage} />}
    </div>
  );
};

export default PaginationWrapper;
