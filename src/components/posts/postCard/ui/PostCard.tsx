import { FC } from "react";
import style from "./PostCard.module.css";
import { Link } from "react-router-dom";
import { TPostItem } from "../../../../shared/types/types";

interface PostCardProps {
  post: TPostItem;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Link className={style.PostCard} to={`/post/${post.id}`}>
      <h2 className={style.Title}>{post.title}</h2>
      <p className={style.Body}>{post.body}</p>
    </Link>
  );
};

export default PostCard;
