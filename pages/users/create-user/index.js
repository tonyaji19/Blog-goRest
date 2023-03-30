import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [error, setError] = useState(false);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `https://gorest.co.in/public/v2/users`,
          { name: username, email: email, gender: gender, status: "active" },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer 00628a832eb3a95207e5a6d515f24f1d71c555761354bcab4b745c2c617b70dd",
            },
          }
        )
        .then((res) => {
          alert("User has been created");
          router.push("/users");
        });
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <Navbar />

      <div className="lg:px-[100px] px-[60px] flex justify-center">
        <div className="w-full max-w-xs my-[60px]">
          <div>
            <h1 className="text-center text-4xl font-bold text-[#093659] mb-10">
              Create User
            </h1>
          </div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                defaultValue={"male"}
                className="block text-gray-700 text-sm font-bold mb-2"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="default">Choose your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#093659] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handlerSubmit}
              >
                Create User
              </button>
              {error && "Something went wrong!"}
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateUser;
