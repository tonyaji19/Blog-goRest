import React from "react";
import { BsPersonHeart } from "react-icons/bs";

const Comment = ({ name, comment }) => {
  return (
    <div className="flex items-center gap-6 my-5 font-quicksand">
      <div>
        <BsPersonHeart className="" size={36} />
      </div>
      <div className="flex flex-col">
        <h1 className="font-medium text-md">{name}</h1>
        <p className="text-sm">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
