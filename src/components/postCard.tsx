import React from "react";
import { AiOutlineComment } from "react-icons/ai";

const Card = ({ post, onClick }: any) => {
  const openModal = () => {
    onClick();
  };
  return (
    <div className="bg-white text-primary md:max-w-[50vw] flex flex-col rounded-xl shadow-lg p-4">
      <div className="flex items-center justify-between my-auto">
        <div className="flex items-center space-x-4">
          <div className="text-md font-bold line-clamp-2">{post?.title}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="text-primary hover:text-white rounded-md hover:bg-primary p-1 cursor-pointer"
            onClick={openModal}
          >
            <AiOutlineComment className="text-xl" />
          </div>
        </div>
      </div>
      <div className="mt-4 text-primary font-bold text-sm">{}</div>
    </div>
  );
};

export default Card;
