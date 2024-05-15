import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
  const animals = ['Cat', 'Cow', 'Dog', 'Horse', 'Gator', 'Bird']

  return animals[Math.floor(Math.random() * animals.length)];
  
}
// console.log(getRandomAnimal());


function App() {

const [animals , setAnimals] =useState([]);

const handleClick = () => {
setAnimals([...animals,getRandomAnimal()]);
}

const getRenderedAnimals = animals.map((animal,index)=>{
  return <AnimalShow type={animal} key={index} />
})

  return (
  <>
 <div className="container">
  <button onClick={handleClick} >Click to add Animal</button>
  {/* <p>the count is {count} </p> */}
  {/* <p>{animal}</p> */}
  <div className='renderedAnimals-list'>{getRenderedAnimals}</div>
 </div>
  </>  
  );
}

export default App;
