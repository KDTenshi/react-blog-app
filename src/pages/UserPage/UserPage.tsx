import { FC } from "react";
import style from "./UserPage.module.css";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../shared/api/usersApi";
import { useGetPostsByUserIdQuery } from "../../shared/api/postsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { UserInfo } from "../../components/users/userInfo";
import { Preloader } from "../../shared/components/preloader";
import { UserPosts } from "../../components/users/userPosts";

const UserPage: FC = () => {
  const { id } = useParams();
  const { data: user, isFetching: isUserFetching } = useGetUserByIdQuery(parseInt(id!));
  const { data: posts, isFetching: isPostsFetching } = useGetPostsByUserIdQuery(user ? user.id : skipToken);
  const isFetching = isPostsFetching || isUserFetching;

  return (
    <main className={style.User}>
      {isFetching && !user && <Preloader />}
      {user && posts && !isFetching && (
        <>
          <UserInfo user={user} />
          <UserPosts username={user.username} posts={posts} />
        </>
      )}
    </main>
  );
};

export default UserPage;
