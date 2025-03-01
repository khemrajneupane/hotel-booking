import { HomeComponent } from '@/components/Home'
import Error from './error';

//setting meta data for home page:
export const metadata = {
  title: "Home page book room"
}
//export const revalidate = 0;// same like using next revalidate below.
const getRooms = async (searchParams: string) =>{
  try{
    const urlParams= new URLSearchParams(searchParams)
    const queryString=urlParams.toString();
    
    const res = await fetch(`${process.env.API_URL}/api/rooms/?${queryString}`,{
      cache:"no-cache",
    })
    const data =  await res?.json();
    return data;
  }catch (error) {
console.log("Error check =>", error)
  }

}
export default async function Home({searchParams}:{searchParams:string}) {
  const data = await getRooms(searchParams) || []
 
  if(data?.message){
    return<Error error={data}/>
  }
  
  return <HomeComponent data={data}/>
}
