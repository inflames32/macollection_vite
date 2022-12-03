import { useEffect, useState } from "react";
/* import { ToastContainer, toast } from "react-toastify"; */
import axios from "axios";
import { useParams, redirect, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import AOS from "aos";
import "aos/dist/aos.css";
/* import "react-toastify/dist/ReactToastify.css"; */
import "../Styles/album.scss";

const Album = () => {
  const [album, setAlbum] = useState();
  const [loading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    AOS.init();
    setIsLoading(true);
    getAlbumById(() => {
      setModalIsOpen(true);
    });
  }, []);

  const getAlbumById = async () => {
    console.log("ici");
    /*   const localeURL = import.meta.env.LOCALE_RULE; */
    await axios
      .get(`http://127.0.0.1:5000/albums/${id}`)
      .then((res) => {
        setAlbum(res.data.album);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        /*  return redirect("albums"); */
      });
  };
  const handleDeleteAlbum = async () => {
    console.log("ici");
    await axios
      .delete(`http://localhost:5000/albums/deleteAlbum/${id}`)
      .then((res) => {
        console.log("45");
        console.log(res.data.success);
        if (res.data.success) {
          /*     notify(res.data.success); */
          return redirect("/");
        }
      })
      .catch((err) => {
        console.log("49");
        console.log(err);
        redirect("/");
      });
  };

  return (
    <div className="album_container" data-aos="zoom-in">
      {!loading && album && (
        <div className="album_details">
          {/*  <ToastContainer /> */}
          <Link to={"/albums"}>
            <IoIosArrowBack className="back_to_albums-list" />
          </Link>
          <div className="album__cover">
            <img src={album.cover_url} className="album__cover_img" alt="" />
          </div>
          <div className="album__title"> {album.title}</div>
          <div className="album__band"> {album.band}</div>
          <div className="album__year"> {album.year}</div>
          <button className="album__btn_delete" onClick={handleDeleteAlbum}>
            Supprimer l'album ?
          </button>
        </div>
      )}
      {/*    <Outlet /> */}
    </div>
  );
};

export default Album;
