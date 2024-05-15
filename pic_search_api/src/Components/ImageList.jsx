import React from 'react'
import ImageShow from './ImageShow'
import './imagelist.css';

const ImageList = ({images}) => {
console.log(images);
  // const imageResult = images.;
  // console.log(imageResult);

const renderimages = images.map((image,index)=>{
  return <ImageShow key={image.id} image={image} />
})




  return (
    <div className='imagel'>
  {renderimages}
    </div>
  )
}

export default ImageList