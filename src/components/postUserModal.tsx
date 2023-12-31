import React, { useState } from "react";

const NewUserModal = ({ isOpen, onClose, onSubmit }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const [inputErrors, setInputErrors] = useState({
    name: false,
    email: false,
    gender: false,
    status: false,
  });

  const validateInputs = () => {
    const errors = {
      name: name.trim() === "",
      email: email.trim() === "",
      gender: gender.trim() === "",
      status: status.trim() === "",
    };
    setInputErrors(errors);
    return !Object.values(errors).includes(true);
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      const newUser = {
        name,
        email,
        gender,
        status,
      };

      onSubmit(newUser);

      setName("");
      setEmail("");
      setGender("");
      setStatus("");
      onClose();
    }
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
              className="text-lg font-medium leading-6 text-gray-900"
              id="modal-headline"
            >
              Create a New User
            </h3>
            <div className="mt-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name{" "}
                {inputErrors.name ? (
                  <span className="text-red-600">*</span>
                ) : null}
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${
                  inputErrors.name ? "border-red-500" : "border-primary"
                } mt-1 p-2 border rounded-lg w-full`}
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email{" "}
                {inputErrors.email ? (
                  <span className="text-red-600">*</span>
                ) : null}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${
                  inputErrors.email ? "border-red-500" : "border-primary"
                } mt-1 p-2 border rounded-lg w-full`}
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender{" "}
                {inputErrors.gender ? (
                  <span className="text-red-600">*</span>
                ) : null}
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`${
                  inputErrors.gender ? "border-red-500" : "border-primary"
                } mt-1 p-2 border rounded-lg w-full`}
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
                {inputErrors.status ? (
                  <span className="text-red-600">*</span>
                ) : null}
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={`${
                  inputErrors.status ? "border-red-500" : "border-primary"
                } mt-1 p-2 border rounded-lg w-full`}
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

export default NewUserModal;
