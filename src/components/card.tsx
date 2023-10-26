import React from "react";
import {AiOutlineComment} from 'react-icons/ai'

const Card = (post:any) => {
  return (
    <div className="bg-tertiary text-white max-w-[50vw] flex flex-col rounded-xl shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-md font-bold">{post?.post?.title}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-primary hover:text-white cursor-pointer">
            <AiOutlineComment className="text-xl"/>
          </div>
        </div>
      </div>
      <div className="mt-4 text-primary font-bold text-sm">{}</div>
    </div>
  );
};

export default Card;
