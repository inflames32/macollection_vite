import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import CardAlbum from "./CardAlbum.jsx";
import Loading from "./Loading.jsx";

import "../Styles/albums-list.scss";
const AlbumsList = () => {
  const [albumsList, setAlbumsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAlbums();
  }, []);

  const getAlbums = async () => {
    await axios
      .get("http://localhost:5000/albums")
      .then((res) => {
        setAlbumsList(res.data.albums);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="album-list">
      <div className="albums-list__container">
        {isLoading && <Loading />}

        {albumsList.map((album) => (
          <CardAlbum
            key={album.id}
            title={album.title}
            year={album.year}
            band={album.band}
            url={album.cover_url}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default AlbumsList;
