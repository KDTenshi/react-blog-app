import { FC } from "react";
import style from "./UserInfo.module.css";
import { TUser } from "../../../../shared/types/types";

interface UserInfoProps {
  user: TUser;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  return (
    <div className={style.UserInfo}>
      <h2 className={style.Title}>{user.username}'s page</h2>
      <div className={style.Container}>
        <div className={style.Image}></div>
        <div className={style.Info}>
          <p className={style.Text}>Name: {user.name}</p>
          <p className={style.Text}>Email: {user.email}</p>
          <p className={style.Text}>Phone: {user.phone}</p>
          <p className={style.Text}>Living in: {user.address.city}</p>
          <p className={style.Text}>
            Website:{" "}
            <a href={`https://${user.website}`} target="_blank" className={style.Link}>
              {user.website}
            </a>
          </p>
          <p className={style.Text}>Working in: {user.company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
