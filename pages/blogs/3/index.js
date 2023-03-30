import CardArticle from "@/components/CardArticle";
import CategoryText from "@/components/CategoryText";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Wiki from "../../../public/wiki.webp";
import Image from "next/image";

const Blog = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch(
      "https://gorest.co.in/public/v2/posts?page=2&per_page=7"
    );
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row lg:gap-20 items-start lg:px-[100px] px-[40px]">
        <div className="flex flex-1 flex-wrap">
          {data.map((item) => {
            return (
              <div key={item.id} className="flex items-start">
                <CardArticle title={item.title} body={item.body} id={item.id} />
                <Image
                  src={Wiki}
                  className="w-auto h-[8em] mt-7 rounded-sm"
                  alt="news"
                />
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <div className="mb-10">
            <CategoryText title={"Trending Right Now"} />
            <ul className="font-medium pt-2">
              <li className="mb-3">
                After Make-Up, Pimples Arise? Find out the solution, come on!
              </li>
              <li className="mb-3">
                The Importance of Caring for the Skin Barrier
              </li>
              <li>5 Tips for Anti Fading Make Up</li>
            </ul>
          </div>
          <div className="mb-10">
            <CategoryText title={"Latest Post"} />
            <ul className="font-medium pt-2">
              <li className="mb-3">
                After Make-Up, Pimples Arise? Find out the solution, come on!
              </li>
              <li className="mb-3">
                The Importance of Caring for the Skin Barrier
              </li>
              <li>5 Tips for Anti Fading Make Up</li>
            </ul>
          </div>
          <div>
            <CategoryText title={"Categories"} />
            <ul className="font-medium pt-2">
              <li className="mb-3">
                After Make-Up, Pimples Arise? Find out the solution, come on!
              </li>
              <li className="mb-3">
                The Importance of Caring for the Skin Barrier
              </li>
              <li>5 Tips for Anti Fading Make Up</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center  gap-3 lg:px-[100px] px-[40px] mb-10">
        <Link
          href={"/blogs"}
          className="py-2 px-3 border-2 border-black text-black font-semibolds"
        >
          1
        </Link>
        <Link
          href={"/blogs/2"}
          className="py-2 px-3 border-2 border-black text-black font-semibolds"
        >
          2
        </Link>
        <Link
          href={"/blogs/3"}
          className="py-2 px-3 bg-[#093659] text-white font-semibolds"
        >
          3
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
