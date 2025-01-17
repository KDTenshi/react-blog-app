import { FC } from "react";
import style from "./PostComments.module.css";
import { useGetCommentsByPostIdQuery } from "../../../shared/api/commentsApi";
import { useParams } from "react-router-dom";
import { Preloader } from "../../preloader";

const PostComments: FC = () => {
  const { id } = useParams();
  const { data: comments, isFetching } = useGetCommentsByPostIdQuery(parseInt(id!));

  console.log(id);

  return (
    <div className={style.Comments}>
      <h2 className={style.Title}>Commentaries</h2>
      {isFetching && <Preloader />}
      {comments && (
        <div className={style.Container}>
          {comments.map((comment) => (
            <div className={style.Comment} key={comment.id}>
              <h2 className={style.Username}>{comment.email}</h2>
              <p className={style.Body}>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostComments;
