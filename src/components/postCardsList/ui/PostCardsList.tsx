import { FC } from "react";
import { useGetAllPostsQuery } from "../../../shared/api/postsApi";
import style from "./PostCardsList.module.css";
import PostCard from "../../postCard/ui/PostCard";

const PostCardsList: FC = () => {
  const { data: posts } = useGetAllPostsQuery();

  return <div className={style.List}>{posts && posts.map((post) => <PostCard post={post} key={post.id} />)}</div>;
};

export default PostCardsList;
