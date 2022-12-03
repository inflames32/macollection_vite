import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
/* import "aos/dist/aos.css";
import "../Styles/card.scss";*/

const CardAlbum = (album) => {
  useEffect(() => {
    /* AOS.init();*/
  });

  return (
    <article className="card" key={album.id} data-aos="fade-left">
      <img src={album.url} alt="" className="card__img" />
      <div className="card__informations">
        <p>{album.title}</p>
        <p>{album.band}</p>
        <p>{album.year}</p>
        <Link to={`/album/${album.id}`}>
          <p className="card__informations__footer">Plus d'infos...</p>{" "}
        </Link>
      </div>
    </article>
  );
};
export default CardAlbum;
