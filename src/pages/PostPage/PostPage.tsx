import { FC } from "react";
import style from "./PostPage.module.css";
import { PostBlock } from "../../components/postBlock";
import { PostComments } from "../../components/postComments";

const PostPage: FC = () => {
  return (
    <main className={style.Post}>
      <PostBlock />
      <PostComments />
    </main>
  );
};

export default PostPage;
