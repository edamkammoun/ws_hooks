import { useState } from "react";
import "./App.css";
import { moviesData } from "./data";
import MovieList from "./components/MovieList";
import Add from "./components/Add";

function App() {
  const [list, setList] = useState(moviesData);
  // delete function  
  const handleDelete=(theId)=>setList(list.filter(el=>el.id!==theId))
  // add new Movie
  const handleAdd=(newMovie)=>setList(...)
  console.log(list);
  return (
    <div className="App">
      <MovieList movies={list} deleteFunction={handleDelete} />
      <Add/>
    </div>
  );
}

export default App;
