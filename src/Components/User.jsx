import { Outlet } from "react-router-dom";
const User = () => {
  return (
    <div className="user">
      <div className="user__header">
        <h1 className="user__title"></h1>
      </div>
      <div className="user__body">
        <p className="user__body__id">ID: </p>
        <p className="user__body__username">Username: </p>
        <p className="user__body__password">Password: </p>
        <p className="user__body__number-of-albums">
          Number of albums in my collection:
        </p>
      </div>
      <div className="user__footer"></div>
      <Outlet />
    </div>
  );
};
export default User;
