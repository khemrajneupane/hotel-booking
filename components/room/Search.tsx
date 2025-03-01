"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const [location, setLoction] = useState("");
  const [guests, setGuests] = useState("");
  const [category, setCategory] = useState("");
  const router = useRouter();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const queryString = [
      location && `location=${encodeURIComponent(location)}`,
      guests && `guestCapacity=${encodeURIComponent(guests)}`,
      category && `category=${encodeURIComponent(category)}`,
    ]
      .filter(Boolean)
      .join("&");

    router.push(`/?${queryString}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-16 shadow-lg rounded-lg w-96 mx-auto">
        <form onSubmit={submitHandler}>
          <h2 className="text-2xl font-bold mb-4">Search Rooms</h2>

          <div className="mb-4">
            <label className="block text-gray-600">Location</label>
            <input
              type="text"
              placeholder="New York"
              value={location}
              onChange={(e) => setLoction(e.target.value)}
              className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">No. of Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500">
            {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Room Type</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500">
              {["king", "single", "twins"].map((types) => (
                <option key={types} value={types}>
                  {types}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300 w-full"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
