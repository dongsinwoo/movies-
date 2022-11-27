import {useParams} from "react-router-dom"
import {useEffect} from "react"
import {useState} from "react"
import {Link} from "react-router-dom";
import './Ditail.scss'
function Ditail(){
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [loding, setLoding]= useState(true);
  const getMovie = async()=>{
    const json = await( await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )).json()
      setMovie(json.data.movie)
      setLoding(false)
      console.log(json)
  }
  useEffect(()=>{
    getMovie()
  },[])
  
  console.log(id);
  return(
    <div className="box1">
 
      <Link to={"/"} className="back"><h3>Back</h3></Link>

      {loding ? <div className="loding">Loding...</div> : <div key={movie.id} className="inner">
          <h1>{movie.title}</h1>
          <img src={`${movie.medium_cover_image}`}/>
          <ul>
            <li>{movie.genres}</li>
          </ul>
          <p>{movie.description_full}</p>
          <a href="movie.url">{movie.url}</a>
        </div>}
    </div>

  )
}

export default Ditail;