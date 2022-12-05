import { useEffect, useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import axios from "axios";

import "aos/dist/aos.css";
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
  const { id } = useParams();
  const getAlbums = async () => {
    /* const localeURL = import.meta.env.LOCALE_RULE; */
    await axios
      .get(`http://127.0.0.1:5000/albums`)
      .then((res) => {
        setAlbumsList(res.data.albums);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  return (
    <div className="albums-list">
      <Link to="/album/add-new-album">
        <button className="btn_add-album">Ajouter un album</button>
      </Link>
      <div className="albums-list__container">
        {isLoading && <Loading />}

        {albumsList.map((album) => (
          <CardAlbum
            key={album.id}
            id={album.id}
            title={album.title}
            year={album.year}
            band={album.band}
            url={album.cover_url}
          />
        ))}
      </div>
      {/*  <Outlet /> */}
    </div>
  );
};

export default AlbumsList;
