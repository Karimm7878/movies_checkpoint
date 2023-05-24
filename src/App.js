import { useState } from "react";
import { moviesData } from "./Moviesdata";
import Movie_list from "./Movie_list";
import Addmovie from "./Addmovie";
import './App.css'
import Search from './Search'

export default function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchName, setsearchName]=useState("")
  const [SearchRating, setRating]=useState()
  console.log(movies);

  const addhandler=(newmovie)=>{
    setMovies([...movies,newmovie ])
  }
  return (
    <div className="wrapper">
          <Search  setsearchName={setsearchName} setRating={setRating} />

      <Movie_list movies={movies} searchName={searchName} SearchRating={SearchRating} />
      <Addmovie  addhandler={addhandler}/>
    </div>
  );
}