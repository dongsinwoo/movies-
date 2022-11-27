import {useState, useEffect} from "react";
import Movies from "../component/Movies";
import './Home.scss';
function Home(){
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async ()=>{
    const json = await (
        await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoding(false);
  }
  useEffect(()=>{
    getMovies()
  },[])
  console.log(movies)
  return(
    <div className="box">
      {loding ? <div className="loding animation">loding...</div>:
      movies.map(movie=> <div key={movie.id} className="movies">
        <Movies
        key={movie.id} 
        id={movie.id}
        title={movie.title} 
        coverImg={movie.medium_cover_image} />
      </div>)}
    </div>
  )
}

export default Home;