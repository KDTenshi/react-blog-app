import { FC, useState } from "react";
import style from "./HomePage.module.css";
import { useGetAllPostsQuery } from "../../shared/api/postsApi";
import { PostCardsList } from "../../components/posts/postCardsList";
import { PaginationWrapper } from "../../shared/components/pagination";
import { Preloader } from "../../shared/components/preloader";

const HomePage: FC = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isFetching } = useGetAllPostsQuery(page);

  return (
    <main className={style.Home}>
      {isFetching && <Preloader />}
      {posts && !isFetching && (
        <PaginationWrapper top currentPage={page} setPage={setPage}>
          <PostCardsList posts={posts} />
        </PaginationWrapper>
      )}
    </main>
  );
};

export default HomePage;
