import { useParams } from "react-router-dom";
import "../Styles/card-album.scss";
const CardAlbum = (album) => {
  const { id } = useParams();
  console.log(album.url);
  /*  useEffect(() => {
    getAlbumById(id);
  }, []); */

  /*   const getAlbumById = async (id) => {
    await axios
      .get(`http://localhost:5000/${id}`)
      .then((res) => {
        setAlbumsList(res.data.albums);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }; */
  return (
    <div className="card">
      <img src={album.url} alt="" className="card__img" />
      <div className="card__informations">
        <p>{album.title}</p>
        <p>{album.band}</p>
        <p>{album.year}</p>
        <p>Plus d'infos...</p>
      </div>
    </div>
  );
};
export default CardAlbum;
