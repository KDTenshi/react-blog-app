import { FC } from "react";
import style from "./PostComments.module.css";
import { TCommentItem } from "../../../../shared/types/types";

interface PostCommentsProps {
  comments: TCommentItem[];
}

const PostComments: FC<PostCommentsProps> = ({ comments }) => {
  return (
    <div className={style.Comments}>
      <h2 className={style.Title}>Commentaries</h2>
      <div className={style.Container}>
        {comments.map((comment) => (
          <div className={style.Comment} key={comment.id}>
            <h2 className={style.Username}>{comment.email}</h2>
            <p className={style.Body}>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComments;
