import {useState, useEffect} from "react";
import Movies from "../component/Movies";
import './Home.scss';
function Home(){
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async ()=>{
    const json = await (
        await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
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
      {loding ? <div className="loding active">loding...</div>: <div className="loding ">loding...</div>}

      <h1 className="haed">Action</h1>
      <div className="movies-contant">
        {movies.map(movie=> {
          if(movie.genres.includes("Action")){
            return(
              <div key={movie.id} className="movies">
                <Movies
                key={movie.id} 
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title} /> 
              </div>
            )
          }else{
            return;
          }
          })}
      </div>

      <h1 className="haed documentary">Documentary</h1>
      <div className="movies-contant">
        {movies.map(movie=> {
          if(movie.genres.includes("Documentary")){
            return(
              <div key={movie.id} className="movies">
                <Movies
                key={movie.id} 
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title} /> 
              </div>
            )
          }else{
            return;
          }
          })}
      </div>

      
      <h1 className="haed comedy">Comedy</h1>
      <div className="movies-contant">
        {movies.map(movie=> {
          if(movie.genres.includes("Comedy")){
            return(
              <div key={movie.id} className="movies">
                <Movies
                key={movie.id} 
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title} /> 
              </div>
            )
          }else{
            return;
          }
          })}
      </div>
     
    </div>
  )
}

export default Home;