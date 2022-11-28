import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import './Movies.scss'
function Movies ({title, coverImg, id}){

  return(
    <div className="movie">
        <Link to={`/movie/${id}`}>
          <img src={`${coverImg}`}/>
        </Link>
        <Link to={`/movie/${id}`} className="title"><h1>{title}</h1></Link>
    </div>
  )
}

Movies.protoTypes={
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movies;