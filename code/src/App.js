import logo from './logo.svg';
import './App.css';
import searchPhotos from './api';
import SearchBar from './Components/SearchBar'
import ImageList from './Components/ImageList'
import { useState } from 'react';

// searchPhotos();

function App() {
const [images, setImages] =useState([]);

const handleSubmit = async (inputValue)=> {
  // console.log("You enterrd this string:",term)
 const result = await searchPhotos(inputValue);
console.log(result);
setImages(result);
}


  return (
    <>
  <SearchBar onSubmit={handleSubmit}  />
  <ImageList images={images}  />
    </>
  );
}

export default App;
