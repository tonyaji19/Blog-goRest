import CardArticle from "@/components/CardArticle";
import CategoryText from "@/components/CategoryText";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Wiki from "../../public/wiki.webp";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch(
      "https://gorest.co.in/public/v2/posts?page=1&per_page=7"
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
              <div key={item.id} className="flex  items-start justify-center ">
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
            <CategoryText title={"Discover more of what matters to you"} />
            <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-3 text-gray-700 text-sm pt-4">
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
          <div>
            <CategoryText title={""} />
            <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-1 text-gray-600 pt-4">
              <div className="cursor-pointer font-semibold  text-center">
                Help
              </div>
              <div className="cursor-pointer font-semibold text-center">
                Status
              </div>
              <div className="cursor-pointer font-semibold text-center">
                Writers
              </div>
              <div className="cursor-pointer font-semibold text-center">
                Blog
              </div>
              <div className="cursor-pointer font-semibold text-center">
                Careers
              </div>
              <div className="cursor-pointer font-semibold text-center">
                Privacy
              </div>
              <div className="cursor-pointer font-semibold text-center">
                Terms
              </div>
              <div className="cursor-pointer font-semibold text-center">
                About
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 lg:px-[100px] px-[40px] mb-10">
        <div className="py-2 px-3 bg-[#093659] text-white font-semibolds">
          1
        </div>
        <Link
          href={"/blogs/2"}
          className="py-2 px-3 border-2 border-black text-black font-semibolds"
        >
          2
        </Link>
        <Link
          href={"/blogs/3"}
          className="py-2 px-3 border-2 border-black text-black font-semibolds"
        >
          3
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
