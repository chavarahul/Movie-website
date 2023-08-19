
import React ,{useState,useEffect}from "react";
import './App.css'
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 148a0729
const API_URL = 'https://www.omdbapi.com?apikey=148a0729';
const App = () =>{
const [movies,setMovie]=useState([]);
const [SearchTerm,setSearchTerm] = useState('');
const searchMovies = async (title) =>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setMovie(data.Search);
}
useEffect(()=>{
     searchMovies('superman');
},[]);
return (
  <>
  <div className="app">
    <h1>Movie Land</h1>
    <div className="search">
      <input placeholder="Search for movies" 
      value={SearchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src={SearchIcon} alt="search"  onClick={() => searchMovies(SearchTerm)}/>
    </div>
    {
      movies?.length > 0
      ? (
        <div className="container">
         {
          movies.map((movie)=>(
          <MovieCard movie={movie} />
          ))}
     </div>
      ):(
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )
    }
  </div>
  </>
);
}

export default App;