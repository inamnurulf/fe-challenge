import React, { useState } from "react";

const UpdateUserModal = ({ isOpen, onClose, onSubmit, userToUpdate }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    let newUser: any = {};

    if (name) {
      newUser.name = name;
    }

    if (email) {
      newUser.email = email;
    }

    if (gender) {
      newUser.gender = gender;
    }

    if (status) {
      newUser.status = status;
    }

    onSubmit(newUser);

    setName("");
    setEmail("");
    setGender("");
    setStatus("");
    onClose();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 text-primary">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top sm:w-full sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3
              className="text-lg font-medium leading-6text-primary"
              id="modal-headline"
            >
              Update <span className="font-bold">{userToUpdate?.name}</span>
            </h3>
            <div className="mt-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name{" "}
                <span className="text-slate-300 text-">
                  {userToUpdate?.name}
                </span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 p-2 border border-primary rounded-lg w-full`}
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email{" "}
                <span className="text-slate-300 text-">
                  {userToUpdate?.email}
                </span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 p-2 border border-primary rounded-lg w-full`}
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender{" "}
                <span className="text-slate-300 text-">
                  {userToUpdate?.gender}
                </span>
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`mt-1 p-2 border border-primary rounded-lg w-full`}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mt-2">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status{" "}
                <span className="text-slate-300 text-">
                  {userToUpdate?.status}
                </span>
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={` mt-1 p-2 border border-primary rounded-lg w-full`}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleSubmit}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2  sm:ml-3 sm:w-auto sm:text-sm"
            >
              Submit
            </button>
            <button
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-primary shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2  sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
