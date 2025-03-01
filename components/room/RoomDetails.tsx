"use client";
import { IRoom } from "@/backend/models/room";
import React from "react";
import ImageSlider from "./ImageSlider";
import StarRatings from "react-star-ratings";
import RoomFeatures from "./RoomFeatures";
import Link from "next/link";
interface Props {
  data: {
    room: IRoom;
  };
}
const RoomDetails = ({ data }: Props) => {
  const { room } = data;
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
      <div className="flex justify-end mb-1">
      <Link href="/" className="bg-gray-800 text-white px-4 py-2 no-underline rounded">
        Back Home
      </Link>
    </div>
        <h1 className="text-3xl font-bold mb-4">{room?.name}</h1>

        <p className="text-gray-600 mb-2">{room?.address}</p>

        <div className="flex items-center mb-4">
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

        <div className="mb-6">
          {/*<!-- MY image slider code goes here -->*/}
          <ImageSlider images={room?.images} />
        </div>

        <div className="flex flex-wrap">
          {/*<!-- Room Description -->*/}
          <div className="w-full md:w-2/3 pr-4 mb-4">
            <p className="text-gray-700 mb-4">{room?.description}</p>
            <div className="w-full md:w-1/3 pl-4 mb-4">
              {/*Features List*/}
              <RoomFeatures room={room} />
            </div>
            {/*Review Input*/}
            <div className="mb-4">
              <label
                htmlFor="review"
                className="block text-sm font-medium text-gray-700"
              >
                Write a Review
              </label>
              <textarea
                id="review"
                name="review"
                rows={4}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
              ></textarea>
              <button className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800">
                Submit Review
              </button>
            </div>
          </div>
          {/*<!-- Calendar -->*/}
          <div className="mb-4">
            {/*MY calendar code goes here*/}

            <div>
              <label htmlFor="start">Start date:</label>

              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
              />
            </div>
          </div>
        </div>

        {/*Reviews Section*/}
        <div>
          <h2 className="text-xl font-bold mb-2">Reviews</h2>
          {/*Display all reviews here*/}
          <div className="mb-2">Review content goes here</div>
        </div>
      </div>
    </div>
  );
};
export default RoomDetails;
