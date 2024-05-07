import logo from './logo.svg';
import './App.css';
import searchPhotos from './api';
import SearchBar from './Components/SearchBar'

// searchPhotos();

function App() {

const handleSubmit = (term)=> {
  console.log("You enterrd this string:",term)
}


  return (
    <>
  <SearchBar onSubmit={handleSubmit}  />
    </>
  );
}

export default App;
