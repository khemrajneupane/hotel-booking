import { IRoom } from '@/backend/models/room';
import React from 'react'
interface Props {
    room: IRoom;
  }
const RoomFeatures = ({room}: Props) => {
  return (
    <ul className="list-none list-inside mb-4">
    <li>{room?.guestCapacity} Guests</li>
    <li>{room?.numOfBeds} Beds</li>
    <li>
      {" "}
      <i
        className={
          room?.isBreakfast
            ? "fa fa-check text-success"
            : "fa fa-times text-danger"
        }
        aria-hidden="true"
      ></i>
      <span>Breakfast</span>
    </li>
    <li>
      {" "}
      <i
        className={
          room?.isInternet
            ? "fa fa-check text-success"
            : "fa fa-times text-danger"
        }
        aria-hidden="true"
      ></i>
      <span>Internet</span>
    </li>
    <li>
      <i
        className={
          room?.isAirConditioned
            ? "fa fa-check text-success"
            : "fa fa-times text-danger"
        }
        aria-hidden="true"
      ></i>
      <span>Air Conditioned</span>
    </li>
    <li>
      <i
        className={
          room?.isPetsAllowed
            ? "fa fa-check text-success"
            : "fa fa-times text-danger"
        }
        aria-hidden="true"
      ></i>
      <span>Pets Allowed</span>
    </li>
    <li>
      <i
        className={
          room?.isRoomCleaning
            ? "fa fa-check text-success"
            : "fa fa-times text-danger"
        }
        aria-hidden="true"
      ></i>
      <span>Room Cleaning</span>
    </li>
  </ul>
  )
}
export default RoomFeatures