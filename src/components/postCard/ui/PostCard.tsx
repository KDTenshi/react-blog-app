import { FC } from "react";
import style from "./PostCard.module.css";
import { TPostItem } from "../../../shared/types/types";

interface PostCardProps {
  post: TPostItem;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className={style.PostCard}>
      <h2 className={style.Title}>{post.title}</h2>
      <p className={style.Body}>{post.body}</p>
    </div>
  );
};

export default PostCard;
