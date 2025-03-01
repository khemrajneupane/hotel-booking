import Room from "../backend/models/room"
import mongoose from "mongoose"
import { rooms } from "./data";

const seedRooms = async () => {
    try{
        await mongoose.connect("mongodb+srv://bookit-v2:bookit-v2@cluster0.ogjzk.mongodb.net/bookit-v2")
        await Room.deleteMany();
        //console.log("all rooms are deleted!")
        await Room.insertMany(rooms)
        console.log("many rooms are added")
        process.exit()
    }catch ( error ){
       // console.log(error)
        process.exit()
    }
}
seedRooms();