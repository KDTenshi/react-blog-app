import { FC } from "react";
import style from "./PostBlock.module.css";
import { useGetUserByIdQuery } from "../../../app/store/usersApi";
import { useGetPostByIdQuery } from "../../../shared/api/postsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { Preloader } from "../../preloader";
import { useParams } from "react-router-dom";

const PostBlock: FC = () => {
  const { id } = useParams();

  const { data: post, isFetching: isPostFetching } = useGetPostByIdQuery(parseInt(id!));
  const { data: user, isFetching: isUserFetching } = useGetUserByIdQuery(post ? post.userId : skipToken);

  return (
    <>
      {(isPostFetching || isUserFetching) && <Preloader />}
      {post && user && (
        <div className={style.PostBlock}>
          <h2 className={style.Author}>
            Posted By <span className={style.Username}>{user.username}</span>
          </h2>
          <div className={style.Text}>
            <h2 className={style.Title}>{post.title}</h2>
            <p className={style.Body}>{post.body}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PostBlock;
