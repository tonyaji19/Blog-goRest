import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LinkArrow } from "@/components/Icons";
import { Smile } from "public/images";
import Headline from "../../public/headline-news.png";
import CategoryText from "../CategoryText";
import CardArticle from "../CardArticle";
import Link from "next/link";
import { truncateString } from "@/utils/truncateString";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function HeroContent({ data }) {
  const clientID = "am-dfICAuPuL-bKTyNn9KzmWTb4-i2bvnzbVri-lJMo";
  const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

  const [image, setImage] = useState([]);
  const fetchRequest = async () => {
    const data = await fetch(endpoint);
    const dataJ = await data.json();
    const result = dataJ.urls.regular;
    console.log(result);
    setImage(result);
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div className="lg:px-[80px] px-[80px] mt-8">
      <div className="flex justify-between gap-x-[80px] flex-col md:flex-row text-justify">
        <div className="hidden md:block">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block w-4 h-4 text-gray-400 "
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="text-gray-800 capitalize">
              <span className="text-[#093659] font-bold">
                Lorem ipsum dolor
              </span>{" "}
              sit amet consectetur adipisicing elit. Excepturi error ipsa
              temporibus voluptate consectetur quam doloremque eius explicabo
              inventore, porro ullam nostrum natus accusantium, ea suscipit non!
              Praesentium, quod ipsum!
            </p>
          </div>
          <div>
            <CategoryText title={"Trending On Newest"} />
            <div>
              <ul className=" mt-3 ">
                {data.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="cursor-pointer flex flex-row justify-between items-start gap-2 mt-2 shadow-sm hover:shadow-md rounded-md p-2"
                    >
                      <Image
                        src={Headline}
                        className="w-28 h-auto rounded-sm"
                        alt="news"
                      />
                      <div>
                        <li className="text-gray-800 text-sm">{item.title}</li>
                        <p className="text-right text-gray-500 text-xs pt-2">
                          21/03/2023, 23:31 WIB
                        </p>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <CategoryText title={"Newest Post"} />
            <div>
              <ul className=" mt-3 mb-5">
                <div
                  key={data[2].id}
                  className=" cursor-pointer flex flex-row justify-between items-start gap-2 mt-2"
                >
                  <Image
                    src={Headline}
                    className="w-28 h-auto rounded-sm"
                    alt="news"
                  />
                  <div>
                    <li className="text-gray-800 text-sm">{data[2].title}</li>
                    <p className="text-right text-gray-500 text-xs pt-2">
                      30/03/2023, 21:31 WIB
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="lg:w-[760px] relative">
            <div>
              <div>
                <Image
                  src={Smile}
                  width="0"
                  height="0"
                  className="h-auto w-50"
                  alt="top article"
                  priority={true}
                />

                <div className="absolute top-3 right-0 bg-red-800 text-white px-5 shadow-md rounded-l-[3px]">
                  <p className="uppercase ">headline</p>
                </div>
              </div>

              <h1 className="font-bold text-[32px] p-2">{data[3].title}</h1>
              <div className="flex items-center justify-between text-gray-500 px-2">
                <div className="flex items-center gap-1">
                  <span className="">Mar 22 · 3 min read · </span>
                  <span className="capitalize bg-gray-100 px-3 rounded-full hover:bg-gray-200 cursor-pointer">
                    coding
                  </span>
                </div>
              </div>
              <p className="text-gray-500 mt-3 px-2">
                {truncateString(data[3].body)}
              </p>

              <MotionLink
                href={`/blogs/${data[3].id}`}
                className="inline-block bg-[#093659] text-white my-4 mx-2 px-[16px] py-[7px] text-lg font-semibold hover:bg-white hover:text-[#093659] border-2 border-solid border-transparent hover:border-[#093659]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                Read More{" "}
                <LinkArrow className={"w-[1.2em] ml-1 inline mx-auto"} />
              </MotionLink>
              <CategoryText title={"Also Love to Learn"} />
              <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-3 text-gray-700 text-sm pt-4 mb-5">
                <div className="cursor-pointer border border-[#093659] px-2 py-1 text-center">
                  Programming
                </div>
                <div className="cursor-pointer border border-[#093659] px-2 py-1 text-center">
                  Data Science
                </div>
                <div className="cursor-pointer border border-[#093659] px-2 py-1 text-center">
                  Technology
                </div>
                <div className="cursor-pointer border border-[#093659] px-2 py-1 text-center">
                  Self Improvement
                </div>
                <div className="cursor-pointer border border-[#093659] px-2 py-1 text-center">
                  Writing
                </div>
                <div className="cursor-pointer border border-[#093659] px-2 py-1 text-center">
                  Machine Learning
                </div>
                <div className="cursor-pointer border border-[#093659] px-2 py-1 text-center">
                  Dukun
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More article */}
      <CategoryText title={""} />
      <div className="pt-4 mx-10 ">
        <CardArticle
          title={data[2].title}
          body={data[2].body}
          id={data[2].id}
        />
        <CardArticle
          title={data[3].title}
          body={data[3].body}
          id={data[3].id}
        />
        <CardArticle
          title={data[4].title}
          body={data[4].body}
          id={data[4].id}
        />
        <CardArticle
          title={data[1].title}
          body={data[1].body}
          id={data[1].id}
        />
        <MotionLink
          href={"/blogs"}
          className="flex text-center items-center justify-center  mb-10 my-4 mx-[2px] px-[16px] py-[7px] text-lg font-semibold bg-white text-[#093659] border-2 border-solid border-[#093659] hover:bg-[#eaeced] hover:border-[#093659]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          Show More <LinkArrow className={"w-[1.2em] ml-1 inline mx-auto"} />
        </MotionLink>
      </div>
    </div>
  );
}

export default HeroContent;
