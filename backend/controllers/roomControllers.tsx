import { NextRequest, NextResponse } from "next/server";
import Room, { IRoom } from "../models/room";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import APIFilters from "../utils/apiFilters";
import ErrorHandler from "../utils/errorHandler";

// Get all rooms => /api/rooms
export const allRooms = catchAsyncErrors(async( req: NextRequest) => {

//const rooms = await Room.find()
const resPerPage: number = 4
    
const { searchParams } = new URL(req.url)
//throw new ErrorHandler("hello khem", 404)
const queryString: any = {}
searchParams.forEach((value,key)=>{
    queryString[key] = value
})
const apiFilters = new APIFilters(Room, queryString).search().filter()

let rooms: IRoom[]= await apiFilters.query
const filteredRoomCount: number = rooms.length
apiFilters.pagination(resPerPage)
rooms = await apiFilters.query.clone()
return NextResponse.json({
    success: true,
    filteredRoomCount,
    resPerPage,
    rooms,
})
})

// creating new room controller
export const newRoom = catchAsyncErrors(async ( req: NextRequest) => {
    const body = await req.json()
    const room = await Room.create(body)
    return NextResponse.json({
        success: true,
        room,
    })
})

// Get a room details => /api/rooms/:id
export const getRoomDetails = catchAsyncErrors(async (
    req:NextRequest,
    { params }:{ params:{ id: string } }
    ) => {
    const room = await Room.findById(params.id)
    //throw new ErrorHandler("Room not found ok.",404)
    if( !room ){
        return NextResponse.json({
            message: "Room not found"
        },
        {
            status: 404
        })
    }
    return NextResponse.json({
        success: true,
        room
    })
})
// Update a room  => /api/admin/rooms/:id
export const updateRoom = catchAsyncErrors(async (
    req:NextRequest,
    { params }:{ params:{ id: string } }
    ) => {

        let room = await Room.findById(params.id)
        const body = await req.json()
        if( !room ){
            return NextResponse.json({
                message: "Room not found"
            },
            {
                status: 404
            })
        }
        room = await Room.findByIdAndUpdate(params.id, body, {
        new: true
        })
        return NextResponse.json({
            success: true,
            room
        })
})
// Update a room  => /api/admin/rooms/:id
export const deleteRoom = catchAsyncErrors(async (
    req:NextRequest,
    { params }:{ params:{ id: string } }
    ) => {

        let room = await Room.findById(params.id)
        
        if( !room ){
            return NextResponse.json({
                message: "Room not found"
            },
            {
                status: 404
            })
        }
        // however, images associated with the room are not deleted yet.
        await room.deleteOne()

        return NextResponse.json({
            success: true
        })
})