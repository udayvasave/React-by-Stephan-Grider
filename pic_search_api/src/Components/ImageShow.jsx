import React from 'react'
import './imageshow.css';

const ImageShow = ({image}) => {
  
  return (
    <div className='imageShow-container'>
      <img src={image.urls.small} alt={image.alt_description} />
      <span>Likes :{image.likes}</span>
    </div>
  )
}

export default ImageShow