import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const UserCard = ({
  user,
  handleDeleteUserSubmit,
  openUpdateModal,
  setIdToUpdate,
}: any) => {
  return (
    <div
      key={user.id}
      className="text-primary bg-white p-4 my-3 rounded-lg md:max-w-[95%] mx-auto border border-2 border-primary overflow-hidden"
    >
      <div className="flex justify-between w-full">
        <div className="max-w-[70%]">
          <p className="text-slate-400 text-sm md:text-base">{user.email}</p>
          <h2 className="md:text-xl font-bold">{user.name}</h2>
          <p className="text-sm md:text-base">Gender: {user.gender}</p>
          <p className="text-sm md:text-base">Status: {user.status}</p>
        </div>
        <div className="flex md:text-3xl items-center">
          <div></div>
          <AiOutlineDelete
            className="hover:bg-primary hover:text-white rounded-md"
            onClick={() => handleDeleteUserSubmit(user)}
          />
          <BiEdit
            className="hover:bg-primary hover:text-white rounded-md"
            onClick={() => {
              openUpdateModal(user);
              setIdToUpdate(user.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
