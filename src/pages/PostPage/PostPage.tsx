import { FC } from "react";
import style from "./PostPage.module.css";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../shared/api/postsApi";
import { useGetUserByIdQuery } from "../../app/store/usersApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetCommentsByPostIdQuery } from "../../shared/api/commentsApi";
import Preloader from "../../shared/components/preloader/ui/Preloader";
import { Post } from "../../components/posts/post";
import { PostComments } from "../../components/posts/postCommentsList";

const PostPage: FC = () => {
  const { id } = useParams();

  const { data: post, isFetching: isPostFetching } = useGetPostByIdQuery(parseInt(id!));
  const { data: user, isFetching: isUserFetching } = useGetUserByIdQuery(post ? post.userId : skipToken);
  const { data: comments, isFetching: isCommentsFetching } = useGetCommentsByPostIdQuery(post ? post.id : skipToken);

  const isFetching = isCommentsFetching || isPostFetching || isUserFetching;

  return (
    <main className={style.Post}>
      {isFetching && <Preloader />}
      {post && user && comments && !isFetching && (
        <>
          <Post post={post} user={user} />
          <PostComments comments={comments} />
        </>
      )}
    </main>
  );
};

export default PostPage;
