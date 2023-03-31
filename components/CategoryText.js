import React from "react";

const CategoryText = ({ title }) => {
  return (
    <div className={`mt-[16px] text-[1.4rem] font-inter`}>
      <p className="font-semibold pl-[1px] text-[#093659]">{title}</p>
      <div className="h-[0.4px] bg-[#093659]"></div>
    </div>
  );
};

export default CategoryText;
