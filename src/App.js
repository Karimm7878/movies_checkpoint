import { useState } from "react";
import { moviesData } from "./Moviesdata";
import Movie_list from "./Movie_list";
import Addmovie from "./Addmovie";
import './App.css'
import Search from './Search'
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import {link} from 'react-router-dom'
import Details from "./Details";

export default function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchName, setsearchName]=useState("")
  console.log(searchName)
  const [SearchRating, setRating]=useState("")
  console.log(movies);

  const addhandler=(newmovie)=>{
    setMovies([...movies,newmovie ])
  }
  return (
    <div className="wrapper">
       <Routes>
         <Route path="/" element={<Search  setsearchName={setsearchName} setRating={setRating}  />}/> </Routes>
         <Routes>
      <Route path="/" element={<Movie_list movies={movies} searchName={searchName} SearchRating={SearchRating}  />}/></Routes>
      <Routes>
      <Route path="/" element={<Addmovie  addhandler={addhandler}/>}/></Routes>
      <Routes>
        <Route path="/trailer/:idUser" element={<Details />}/>




      </Routes>





    </div>
  );
}