import React from 'react'
import { useState } from 'react'
import Bird from './images/bird.svg'
import Cat from './images/cat.svg'
import Cow from './images/cow.svg'
import Dog from './images/dog.svg'
import Gator from './images/gator.svg'
import Horse from './images/horse.svg'
import heart from './images/heart.svg'
import "./animalShow.css"


const svgMap = {
    Bird:Bird,
    Cat:Cat,
    Cow:Cow,
    Dog:Dog,
    Horse:Horse,
    Gator,
}

const AnimalShow = ({type}) => {

const[clicks, setClicks]= useState(0);

const handleClick = ()=> {
setClicks(clicks + 1);
console.log(clicks);
    
}



  return (
    <div className='animalContainer' onClick={handleClick}>
        <img className='animal' src={svgMap[type]} alt="" style={{width:"15rem", height:'15rem'}} />
        <img className='heart' src={heart} alt="" style={{width: 10 + 10 * clicks +'px'}} />
    </div>
  )
}

export default AnimalShow