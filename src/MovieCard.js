import ReactStars from "react-stars";
import {Link} from 'react-router-dom'
const MovieCard = ({ el }) => {
  console.log(el);
  return (
    <div className="screen-2">
      <div className="top-image">
       <Link to={`/trailer/${el.id}`}> <img src={el.image} alt="poster" /></Link>
      </div>

      <div className="main-heading">
        <h1 className="title">{el.name}</h1>
        <div className="row">
          {
            <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
              value={el.rating}
              edit={false}
            />
          }

          <span>{el.date}</span>
          <span className="r">R</span>
          <span>{el.seasons}</span>
          <span className="hd">HD</span>
        </div>
      </div>

      <div className="categories">
        <a href="#" className="active">
          Description
        </a>
        <a href="#">Episodes</a>
        <a href="#">Reviews</a>
      </div>

      <p className="description">{el.description}</p>
      <div className="btn-play">
        <span>
          {" "}
          <ion-icon className="icon" name="play"></ion-icon>{" "}
        </span>
        Play
      </div>
    </div>
  );
};
export default MovieCard;
