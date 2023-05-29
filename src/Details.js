import React from 'react'
import { useParams } from "react-router-dom";
import {moviesData} from './Moviesdata'


const Details = () => {
    const { idUser } = useParams();
    console.log(idUser, "iddddd");
    const film = moviesData.find((el) => el.id === Number(idUser));
  return (
    <div>
      
      <iframe width="956" height="538" src={film.trailer}></iframe>
    </div>
  )
}

export default Details
