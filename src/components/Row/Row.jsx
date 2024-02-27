import axios from "../../axios";
import { useState, useEffect } from "react";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl ,isLargeRow}) {
  const [movieData, setMovieData] = useState();
  const [trailerUrl,setTrailerUrl] = useState();

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovieData(res.data.results);
    });
  }, []);

  function handleClick(movie){
    if(trailerUrl){
      setTrailerUrl('')
    }
    else{
      movieTrailer(movie.title || movie.name || '').then((url)=>{
        const params = new URLSearchParams(new URL(url).search);
        setTrailerUrl(params.get('v'));
        }).catch((error)=> console.log(error));
    }
    
  }
  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movieData &&
          movieData.map((item) => {
            return (
              <img
                src={base_url + item.poster_path}
                alt="" key={item.id}
                className={isLargeRow?"row_posterLarge":"row_poster"}
                onClick={()=>{
                  handleClick(item)
                }}
              />
            );
          })}
      </div>
      <div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  );
}

export default Row;
