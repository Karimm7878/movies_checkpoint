import MovieCard from "./MovieCard";

const MovieList = ({ movies, searchName,SearchRating }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      {movies.filter((el)=> el.name.toLowerCase().includes(searchName.toLowerCase())&& el.rating >=SearchRating) 
      
      .map((el) => (
        <MovieCard el={el} />
      ))} 
    </div>
  );
};
export default MovieList;
