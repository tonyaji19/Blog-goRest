import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Smile } from "public/images";
import Footer from "@/components/Footer";
import CategoryText from "@/components/CategoryText";
import CommentCard from "@/components/DetailBlog/Comment";
import axios from "axios";

const DetailBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchData = () => {
    const detailApi = `https://gorest.co.in/public/v2/posts/${id}/`;
    const comments = `https://gorest.co.in/public/v2/posts/${id}/comments`;

    const getDetailPost = axios.get(detailApi);
    const getComments = axios.get(comments);

    axios.all([getDetailPost, getComments]).then(
      axios.spread((...allData) => {
        const detailPost = allData[0].data;
        const allComment = allData[1].data;

        setData(detailPost);
        setComments(allComment);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="lg:px-[100px] px-[60px] font-quicksand">
        <div className="flex justify-center items-center">
          <div>
            <Image
              src={Smile}
              width={700}
              alt="Blog Detail Image"
              priority={true}
            />
            <article className="max-w-2xl px-6 py-12 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50">
              <div className="w-full mx-auto space-y-4">
                <h1 className="xl:text-5xl font-bold leading-none">
                  {data.title}
                </h1>
                <div className="flex flex-wrap space-x-2 text-sm ">
                  <a
                    rel="noopener noreferrer"
                    href=""
                    className="p-1 hover:underline"
                  >
                    #MambaUI
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href=""
                    className="p-1 hover:underline"
                  >
                    #TailwindCSS
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href=""
                    className="p-1 hover:underline"
                  >
                    #Angular
                  </a>
                </div>
                <p className="text-sm dark:text-gray-400">
                  by&nbsp;
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline "
                  >
                    <span>Tony Aji&nbsp;</span>
                  </a>
                  on&nbsp;
                  <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                </p>
              </div>
              <div className=" lg:w-[600px] text-justify">
                <p>{data.body}</p>
              </div>
            </article>

            <div className="lg:w-[36rem] mx-auto pb-10">
              <CategoryText title={"Comment"} />
              {comments.length >= 1 ? (
                comments.map((item) => {
                  return (
                    <div key={item.id}>
                      <CommentCard name={item.name} comment={item.body} />
                    </div>
                  );
                })
              ) : (
                <h1 className="font-bold text-center py-5 text-[#093659]">
                  No Comments
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailBlog;
