import React from "react";
import Image from "next/image";
import Link from "next/link";
import { truncateString } from "@/utils/truncateString";

const CardArticle = ({ title, body, id }) => {
  return (
    <Link href={`/blogs/${id}`}>
      <div className="flex justify-between gap-x-[100px] flex-col md:flex-col text-justify font-quicksand">
        <div className="md:flex items-start cursor-pointer px-5 py-5 mb-[7px] gap-[50px] transition-all ease-in-out rounded-lg">
          <div>
            <h1 className="xl:text-[24px] font-bold">
              <p className="hover:underline">{title}</p>
            </h1>
            <p className="mt-[10px] text-gray-500">{truncateString(body)}</p>

            <div className="flex items-center gap-5 text-gray-500 xl:mt-[10px]">
              <div className="flex items-center ">
                <span className="">Nov 22 · 7 min read · </span>
                <span className="capitalize bg-gray-100 px-3 rounded-full hover:bg-gray-200 cursor-pointer">
                  IT security
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardArticle;
