import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ImageNews from "../public/headline-news.png";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [Hours, setHours] = React.useState(0);
  const [Minutes, setMinutes] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHours((Hours) => {
        date = new Date();
        return date.getHours();
      });
      setMinutes((Minutes) => {
        date = new Date();
        return date.getMinutes();
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let date;

  return (
    <>
      <div className="flex justify-between items-center p-6 bg-[#104f80]">
        <div className="md:flex sm:flex-row  items-end sm:gap-2 md:gap-6">
          <Image
            src={ImageNews}
            className="w-auto h-20 rounded-sm"
            alt="news"
          />
          <h1 className=" sm:text-xl md:text-5xl uppercase text-white font-bold ">
            NEWEST
            <span className="text-[#da373a] italic sm:text-xl md:text-3xl">
              Blog
            </span>
            <span className="md:text-2xl sm:text-xl">.COM</span>
          </h1>
        </div>

        <div>
          <h2 className=" uppercase font-normal text-sm  sm:tracking-[4px] md:tracking-[6px]  text-white">
            Local time &nbsp;
            {Hours % 12 > 0 ? Hours % 12 : Hours}:{Minutes}
            {Hours >= 12 ? " pm" : " am"}
          </h2>
        </div>
      </div>
      <header className="sticky w-full h-full top-0 z-50 font-firacode mb-10">
        <div className=" bg-gray-900 text-white text-center ">
          <div className="">
            <ul className="flex flex-row uppercase text-md font-normal text-gray-300 justify-center items-center ">
              <li className="block py-3 px-5 tracking-[4px] hover:bg-gray-800">
                <Link href="/">Home</Link>
              </li>
              <li className="block py-3 px-5 tracking-[4px] hover:bg-gray-800">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="block py-3 px-5 tracking-[4px] hover:bg-gray-800">
                <Link href="/users">User</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
