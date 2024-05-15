import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BookCreate from './Components/BookCreate';

function App() {
const [book, setBook] = useState([]);

const createBook = (title)=> {
  console.log('this is book  name', title )
}


  return (
    <div>
   <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
