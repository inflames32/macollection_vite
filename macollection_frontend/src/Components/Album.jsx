import { Outlet } from "react-router-dom";
const Album = () => {
  return (
    <div className="album">
      <h1 className="album__title">Album</h1>
      <Outlet />
    </div>
  );
};

export default Album;
