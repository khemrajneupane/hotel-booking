"use client";
import Loading from "@/app/loading";
import { setIsAuthenticated, setUser } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();
  // set user data in the state from here
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data?.user));
      dispatch(setIsAuthenticated(true));
    }
  }, [data]);
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const logoutHandler = () => {
    signOut();
  };
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6">
      <div className="flex items-center">
        <Link
          href="/"
          className="rounded-full overflow-hidden"
        >
          <Image
            style={{ cursor: "pointer" }}
            src="/images/default_house.jpg"
            alt="room book"
            height={100}
            width={150}
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div onClick={toggleDropdown} className="rounded-full overflow-hidden">
         {user&&<img
            src={user?.image || (user?.avatar && user?.avatar.url) || "/images/avatar.jpg"}

            alt="User"
            className="w-8 h-8 object-cover"
          />}
        </div>
        <div className="cursor-pointer">
          <p onClick={toggleDropdown} className="font-semibold">{user?.name}</p>
          {isOpen && (
            <div className="bg-gray-800 absolute right-0 mt-2 border border-blue-200 rounded-md shadow-md">
              <div>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2"
                >
                  Dashboard
                </Link>
                <Link
                  href="/bookings"
                  className="block px-4 py-2"
                >
                  My Bookings
                </Link>
                {user?.role &&<Link
                  href="/me/update"
                  className="block px-4 py-2"
                >
                  Profile
                </Link>}
                {user?.image&&<Link
                  href="/me/update"
                  className="block px-4 py-2"
                >
                  Profile
                </Link>}
                <Link
                  href="/"
                  className="block px-4 py-2"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
          {!user && (
            <Link
              href="/login"
              className="btn btn-danger px-4 text-white login-header-btn float-right"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
