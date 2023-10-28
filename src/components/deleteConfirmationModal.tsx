import React from "react";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal bg-white md:w-1/2 max-w-[90vw] p-6 rounded-lg shadow-lg border border-primary">
        <p className="text-gray-800 mb-4 text-primary">
          Are you sure you want to delete this item?
        </p>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover-bg-gray-400 text-gray-800 font-semibold py-2 px-4 mr-2 rounded text-sm	"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover-bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} style={{ zIndex: -1 }}></div>
    </div>
  );
};

export default DeleteConfirmationModal;
