import Error from "@/app/error";
import RoomDetails from "@/components/room/RoomDetails";

interface Props {
    params: {id:string}
}
export const revalidate = 0;// same like using next revalidate below.
const getRooms = async (id: string) =>{
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`)
  return res.json()
}
export default async function RoomDetailsPage({ params }: Props) {
  const data = await getRooms(params?.id)
  if(data?.message){
    return<Error error={data}/>
  }
  //console.log(data)
  return <RoomDetails data={data}/>
}

export async function generateMetadata({params}: Props){
const data = await getRooms(params?.id)
return {
    title: data?.room?.name
}
}