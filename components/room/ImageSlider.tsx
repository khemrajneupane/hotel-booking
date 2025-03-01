import { IImage, IRoom } from '@/backend/models/room';
import React from 'react'
import ImageGallery from "react-image-gallery";

interface Props {
    images: IImage[];
  }
const ImageSlider = ({images}: Props) => {
    const imagesForSlider = images.map((item)=>{
        return(
            {
                original:item?.url?item.url:"/images/default_room_image.jpg",
                thumbnail:item?.url?item.url:"/images/default_room_image.jpg"
            }
            )
    })
 
  return(<ImageGallery items={imagesForSlider} />)
}
export default ImageSlider
