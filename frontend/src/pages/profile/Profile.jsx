import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import { useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("authUser");
    return savedUser ? JSON.parse(savedUser) : {};
  });

  const [loading, setLoading] = useState(!localStorage.getItem("authUser"));
  const [error, setError] = useState(null);

  if (error) {
    toast.error("There was an error fetching the user");
    console.log("Error fetching user: ", error);
    return;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div class="md:grid grid-cols-3 grid-rows-2  bg-white gap-2 p-4 rounded-xl ">
            <div class="md:col-span-1 h-48  ">
              <div class="flex w-full h-full relative">
                <img
                  src={user.profilePic}
                  class="w-44 h-44 m-auto rounded-full object-cover shadow-xl"
                  alt="User profile picture"
                />
              </div>
            </div>
            <div class="md:col-span-3 h-48 shadow-xl  space-y-2 p-3">
              <div class="flex ">
                <span class="text-sm border  font-bold uppercase rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
                  Name:
                </span>
                <input
                  type="text"
                  value={user.username}
                  className="px-4 border-l-0  input input-bordered input-success w-full max-w-xs"
                />
                {/* <input
                  class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                  type="text"
                /> */}
              </div>
              <div class="flex ">
                <span class="text-sm border bg-blue-50 font-bold uppercase rounded-l px-4 py-2  whitespace-no-wrap w-2/6">
                  Role:
                </span>
                <input
                  class="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
                  type="text"
                  value="User"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
