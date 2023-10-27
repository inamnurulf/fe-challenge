"use client";
import UpdateUserModal from "@/components/patchUserModal";
import NewUserModal from "@/components/postUserModal";
import UserCard from "@/components/userCard";
import React, { useState, useEffect } from "react";

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
        } else {
          console.error("Error updating the user:", data);
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
        } else {
          console.error(`Error deleting user with ID ${userId}`);
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
        console.log(data);
        if (data.id) {
          setUsers((prevUsers) => [...prevUsers, data]);
        } else {
          console.error("Error creating a new user:", data);
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
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <section className="min-h-screen bg-primary">
      <form className="max-w-[90vw] md:max-w-[70vw] mx-auto py-3">
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
      </form>
      <div className="bg-white rounded-md my-3 mx-auto p-3 max-w-[85vw] h-[80vh] overflow-y-auto">
        {filteredUsers.map((user: any) => (
          <UserCard
            key={user.id}
            user={user}
            handleDeleteUserSubmit={handleDeleteUserSubmit}
            openUpdateModal={openUpdateModal}
            setIdToUpdate={setIdToUpdate}
          />
        ))}
        <div className="text-center">No more data...</div>
      </div>
      <button
        onClick={openPostModal}
        className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
      >
        Create New User
      </button>
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
