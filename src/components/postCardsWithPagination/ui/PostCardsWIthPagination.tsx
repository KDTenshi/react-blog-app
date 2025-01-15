import { FC, useState } from "react";
import { PostCardsList } from "../../postCardsList";
import { Pagination } from "../../pagination";
import { useGetAllPostsQuery } from "../../../shared/api/postsApi";
import style from "./PostCardsWithPagination.module.css";
import { Preloader } from "../../preloader";

const PostCardsWithPagination: FC = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isFetching } = useGetAllPostsQuery(page);

  return (
    <div className={style.List}>
      <Pagination currentPage={page} setPage={setPage} />
      {isFetching && <Preloader />}
      {posts && <PostCardsList posts={posts} />}
      <Pagination currentPage={page} setPage={setPage} />
    </div>
  );
};

export default PostCardsWithPagination;
