import { FC } from "react";
import style from "./PostCardsList.module.css";
import PostCard from "../../postCard/ui/PostCard";
import { TPostItem } from "../../../shared/types/types";

interface PostCardsListProps {
  posts: TPostItem[];
}

const PostCardsList: FC<PostCardsListProps> = ({ posts }) => {
  return (
    <div className={style.List}>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostCardsList;
