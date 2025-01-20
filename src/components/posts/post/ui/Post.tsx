import { FC } from "react";
import style from "./Post.module.css";
import { TPostItem, TUser } from "../../../../shared/types/types";
import { Link } from "react-router-dom";

interface PostProps {
  post: TPostItem;
  user: TUser;
}

const Post: FC<PostProps> = ({ post, user }) => {
  return (
    <div className={style.PostBlock}>
      <h2 className={style.Author}>
        Posted By{" "}
        <Link to={`/users/${user.id}`} className={style.Username}>
          {user.username}
        </Link>
      </h2>
      <div className={style.Text}>
        <h2 className={style.Title}>{post.title}</h2>
        <p className={style.Body}>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
