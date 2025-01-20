import { FC } from "react";
import { TPostItem } from "../../../../shared/types/types";
import { PostCardsList } from "../../../posts/postCardsList";
import style from "./UserPosts.module.css";

interface UserPostsProps {
  posts: TPostItem[];
  username: string;
}

const UserPosts: FC<UserPostsProps> = ({ posts, username }) => {
  return (
    <div className={style.UserPosts}>
      <h2 className={style.Title}>{username}'s posts</h2>
      <PostCardsList posts={posts} />
    </div>
  );
};

export default UserPosts;
