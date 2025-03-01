"use client";

import { useLazyUpdateSessionQuery, useUpdateProfileMutation } from "@/redux/api/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ButtonLoader from "../layout/ButtonLoader";
import { setUser } from "@/redux/features/userSlice";

const UpdateProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { user: currentUser } = useAppSelector((state) => state.auth);
    const [updateProfile, { isLoading, isSuccess, error }] = useUpdateProfileMutation();
   const [updateSession, {data}]= useLazyUpdateSessionQuery();
   if (data) dispatch(setUser(data?.user));//if the user is updated via me/update, then this updated user should be set in redux, too. So that, in the header, we will see the changed username.
   //console.log("data 2",data)
    useEffect(() => {
        if (currentUser) {
          setName(currentUser?.name);
          setEmail(currentUser?.email);
        }
        if (error && "data" in error) {
            toast.error(error?.data?.message);
          }
          if (isSuccess) {
            //@ts-ignore
            updateSession();
            router.refresh();
          }
      }, [currentUser,isSuccess, error]);
    
const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { name, email };
    updateProfile(userData);
    };
  /*
    const { user: currentUser } = useAppSelector((state) => state.auth);
  
    const [updateProfile, { isLoading, isSuccess, error }] =
      useUpdateProfileMutation();
  
    const [updateSession, { data }] = useLazyUpdateSessionQuery();
  
    if (data) dispatch(setUser(data?.user));
  
    useEffect(() => {
      if (currentUser) {
        setName(currentUser?.name);
        setEmail(currentUser?.email);
      }
  
      if (error && "data" in error) {
        toast.error(error?.data?.errMessage);
      }
  
      if (isSuccess) {
        //@ts-ignore
        updateSession();
  
        router.refresh();
      }
    }, [currentUser, error, isSuccess]);*/
  

  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-center text-gray-800 mb-6">
        Update Profile
      </h2>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        <button
        disabled={isLoading}
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold tracking-wide hover:bg-indigo-500"
        >
          {isLoading?<ButtonLoader />:"Update"}
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
