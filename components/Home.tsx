"use client";
import React, { useEffect } from "react";
import RoomItem from "./room/RoomItem";
import toast from "react-hot-toast";
import { IRoom } from "@/backend/models/room";
import CustomPagination from "./layout/CustomPagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomCount: number;
    rooms: IRoom[];
  };
}
export const HomeComponent = ({ data }: Props) => {
  const { rooms, resPerPage, filteredRoomCount } = data;
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  useEffect(() => {
    //toast.success("welldone")
    //toast.error("wooops")
  }, []);

  return (
    <div>
      <div className="text-center font-bold text-4xl text-yellow-500">
        {location
          ? `${
              filteredRoomCount > 0 ? filteredRoomCount : "No "
            } rooms found in location: ${location}`
          : "All rooms"}
      </div>
      <div className="text-center font-bold text-4xl text-yellow-500">
        <Link href="/search" className="ml-4 mt-2 back-to-search">
          <i className="fas fa-arrow-left me-1"></i>Search Rooms
        </Link>
      </div>
      <div className="text-center font-bold text-4xl text-red-500">
        {rooms?.length === 0 && <h1 className="">No rooms to display</h1>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {rooms?.length > 0 &&
          rooms?.map((room) => <RoomItem key={room._id} room={room} />)}
      </div>
      <CustomPagination
        resPerPage={resPerPage}
        filteredRoomsCount={filteredRoomCount}
      />
    </div>
  );
};
