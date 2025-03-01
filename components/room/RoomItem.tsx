"use client"
// components/RoomItem.js
import React from "react"
import Link from 'next/link';
import StarRatings from "react-star-ratings";
import { IRoom } from "@/backend/models/room";
import Image from "next/image";

interface Props {
    room: IRoom;
}
const RoomItem = ({room}: Props) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md group transition-transform duration-300 ease-in-out transform hover:scale-105">
      <Link href={`/rooms/${room?._id}`}>
      <div className="relative">
        <Image
          src={room?.images?.length > 0 ? room.images[0].url : "/images/default_room_image.jpg"}
          alt={room?.name}
          height={170}
          width={100}
          className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base sm:text-lg md:text-lg mb-2 max-h-16 min-h-16">{room?.name}</h2>
        <p className="text-gray-600 mb-2">Price per night: €{room?.pricePerNight}</p>
      </div>
      <div className="flex items-center mb-2">
        <StarRatings
            rating={room?.ratings}
            starRatedColor="#e61e4d"
            numberOfStars={5}
            starDimension="18px"
            starSpacing="1px"
            name="rating"
        />
        <span className="ml-2">({room?.numOfReviews} Reviews)</span>
      </div>
      </Link>
      
      <Link href={`/rooms/${room?._id}`} className="block bg-gray-800 text-white px-4 py-2 rounded-md text-center transition-colors duration-300 ease-in-out group-hover:bg-gray-700">
          View Details
      </Link>
    </div>
  );
};

export default RoomItem;
