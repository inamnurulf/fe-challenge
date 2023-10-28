"use client";
import LoadingSpinner from "@/components/loadingSpinner";
import UpdateUserModal from "@/components/patchUserModal";
import NewUserModal from "@/components/postUserModal";
import UserCard from "@/components/userCard";
import React, { useState, useEffect } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { toast } from "react-toastify";

const User = () => {
  interface User {
    name: string;
    email: string;
    gender: string;
    status: string;
    id: any;
  }
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [userToUpdate, setUserToUpdate] = useState<any>();
  const [idToUpdate, setIdToUpdate] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

  const token = process.env.NEXT_PUBLIC_REACT_APP_BEARER_TOKEN;

  const handleUpdateUserSubmit = (bodyUpdate: any) => {
    const apiUrl = `https://gorest.co.in/public/v2/users/${idToUpdate}`;
    fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyUpdate),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setUsers((prevUsers) =>
            prevUsers.map((user: any) =>
              user.id === data.id ? { ...user, ...data } : user
            )
          );
          toast("User Data Updated: Changes Applied! ✨", {
            hideProgressBar: false,
            autoClose: 2000,
            type: "success",
            theme: "colored",
          });
        } else {
          console.error("Error updating the user:", data);
          toast(`Error updating the user`, {
            hideProgressBar: false,
            autoClose: 2000,
            type: "error",
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating the user:", error);
      });
  };

  const handleDeleteUserSubmit = (userId: number) => {
    const apiUrl = `https://gorest.co.in/public/v2/users/${userId}`;

    fetch(apiUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setUsers((prevUsers) =>
            prevUsers.filter((user: any) => user.id !== userId)
          );
          toast("User Profile Vanquished from the Database! ⚰️", {
            hideProgressBar: false,
            autoClose: 2000,
            type: "success",
            theme: "colored",
          });
        } else {
          console.error(`Error deleting user with ID ${userId}`);
          toast(`Error deleting user with ID ${userId}`, {
            hideProgressBar: false,
            autoClose: 2000,
            type: "error",
            theme: "colored",
          });
        }
      })
      .catch((error) => {
        console.error(`Error deleting user with ID ${userId}`, error);
      });
  };
  const handleNewUserSubmit = (newUser: User) => {
    const apiUrl = "https://gorest.co.in/public/v2/users";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data: any) => {
        if (data.id) {
          setUsers((prevUsers) => [data, ...prevUsers]);
          toast("User Data Uploaded to the Matrix! 🤖", {
            hideProgressBar: false,
            autoClose: 2000,
            type: "success",
            theme: "colored",
          });
        } else {
          console.error("Error creating a new user:", data);
          toast(
            `Error creating a new user: ${data[0]?.field} ${data[0]?.message}`,
            {
              hideProgressBar: false,
              autoClose: 2000,
              type: "error",
              theme: "colored",
            }
          );
        }
      })
      .catch((error) => {
        console.error("Error creating a new user:", error);
      });
  };

  const handleSearch = (e: any) => {
    setSearchInput(e.target.value);
  };

  const openUpdateModal = (user: User) => {
    setIsModalUpdateOpen(true);
    setUserToUpdate(user);
  };
  const closeUpdateModal = () => {
    setIsModalUpdateOpen(false);
  };

  const openPostModal = () => {
    setIsModalOpen(true);
  };
  const closePostModal = () => {
    setIsModalOpen(false);
  };

  const filteredUsers = users.filter((user: User) =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    if (!token) {
      console.error(
        "Bearer token is missing. Please set the REACT_APP_BEARER_TOKEN environment variable."
      );
      return;
    }
    const apiUrl = "https://gorest.co.in/public/v2/users";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <section className="min-h-screen pb-5">
      <div className="p-5 mx-auto w-[90vw]">
        <div className="font-roboto font-black self-start m-5  text-white [text-shadow:0px_4px_4px_var(--tw-shadow-color)] shadow-black text-4xl relative">
          User Section
        </div>
        <div className="bg-white mt-5 w-full h-[2px] [text-shadow:0px_4px_4px_var(--tw-shadow-color)] shadow-black" />
        <p className="text-white text-roboto">
          {" "}
          Section ini merupakan bagian user dilengkapi dengan CRUD fitur juga dengan berbagai handlernya termasuk loading.
        </p>
      </div>
      <div className="max-w-[90vw] md:max-w-[70vw] mx-auto py-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            ></svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search User.."
            required
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
        <button
          onClick={openPostModal}
          className="text-primary relative right-0 m-3 mx-0 bg-white hover:bg-primary hover:text-white border hover:border-white border-2 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 flex justify-between items-center"
        >
          <AiOutlineUserAdd className="text-xl" />
          <div className="hidden md:block"> Create New User</div>
        </button>
      </div>
      <div className="bg-white rounded-md my-3 mx-auto p-3 max-w-[70vw] h-[80vh] overflow-y-auto scrollbar">
        {loading ? (
          <LoadingSpinner />
        ) : (
          filteredUsers.map((user: any) => (
            <UserCard
              key={user.id}
              user={user}
              handleDeleteUserSubmit={handleDeleteUserSubmit}
              openUpdateModal={openUpdateModal}
              setIdToUpdate={setIdToUpdate}
            />
          ))
        )}
        {loading ? null : <div className="text-center">No more data...</div>}
      </div>
      <UpdateUserModal
        onClose={closeUpdateModal}
        isOpen={isModalUpdateOpen}
        userToUpdate={userToUpdate}
        onSubmit={handleUpdateUserSubmit}
      />
      <NewUserModal
        isOpen={isModalOpen}
        onClose={closePostModal}
        onSubmit={handleNewUserSubmit}
      />
    </section>
  );
};

export default User;
