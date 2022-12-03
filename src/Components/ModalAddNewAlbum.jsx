import { useEffect, useState } from "react";
import albumArt from "album-art";

import axios from "axios";
import { Outlet, useParams, redirect, Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "../Styles/modal-add-album.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const ModalAddNewAlbum = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setIsLoading] = useState(false);
  const [cover_url_from_web, setCoverUrlFromWeb] = useState("");
  const [inputsValue, setInputsValue] = useState({
    band: "",
    title: "",
    year: "",
    cover_url: cover_url_from_web,
  });

  const handleCover = (e) => {
    setIsLoading(true);
    e.preventDefault();
    albumArt(`${inputsValue.band}`, {
      album: ` ${inputsValue.title}`,
      size: "large",
    }).then((res) => {
      console.log(res);
      setCoverUrlFromWeb(res);
      setIsLoading(false);
    });
  };
  const handleInputs = (e) => {
    const value = e.target.value;
    setInputsValue({
      ...inputsValue,
      [e.target.name]: value,
    });
  };

  const submitAlbum = async () => {
    await axios
      .post("http://localhost:5000/albums/addAlbum", {
        title: inputsValue.title,
        band: inputsValue.band,
        year: inputsValue.year,
        cover_url: cover_url_from_web,
      })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        return;
      });
    console.log("je submit le nouvel album");
  };

  return (
    <div className="modal_add_new_album" data-aos="zoom-in">
      <header className="modal_add_new_album__header">
        <Link to={"/albums"}>
          <IoIosArrowBack className="back_to_albums-list" />
        </Link>
        <h1 className="modal_add_new_album__title">
          Ajouter un nouvel album ?
        </h1>
      </header>

      <form action="submit" className="modal_add_new_album__form">
        <label htmlFor="band">Nom du groupe</label>
        <input
          type="text"
          name="band"
          placeholder="Nom de du groupe"
          onChange={handleInputs}
        />
        <label htmlFor="name">Nom de l'album</label>
        <input
          type="text"
          name="title"
          value={inputsValue.title}
          placeholder="Nom de l'album"
          onChange={handleInputs}
        />

        <label htmlFor="band">Année de l'album</label>
        <input
          type="number"
          name="year"
          value={inputsValue.year}
          placeholder="Année de l'album"
          onChange={handleInputs}
        />
        {cover_url_from_web && (
          <div className="cover_div">
            <div name="cover" value={cover_url_from_web}>
              {cover_url_from_web}
            </div>
          </div>
        )}

        {loading && <span>Chargement...</span>}
        {inputsValue.title && inputsValue.band ? (
          <button onClick={handleCover}>Récupérer la jaquette</button>
        ) : (
          ""
        )}

        <button
          className="modal_add_new_album__btn_submit"
          type="submit"
          onClick={(e) => {
            setIsLoading(true);
            e.preventDefault();
            submitAlbum();
          }}
        >
          {loading ? "chargement..." : "OK"}
        </button>
      </form>
    </div>
  );
};

export default ModalAddNewAlbum;
