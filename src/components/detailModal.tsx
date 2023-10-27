import React, { useState, useEffect } from "react";
import "../app/globals.css";
import LoadingSpinner from "./loadingSpinner";

const DetailModal = ({ data, onClose }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://gorest.co.in/public/v2/posts/${data.id}/comments`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setComments(data);
          setLoading(false);
        } else {
          console.error("Failed to fetch comments");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchComments();
    }
  }, [data.id, isOpen]);
  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-4 md:max-w-[50vw] max-w-[80vw] max-h-[70vh] rounded-xl">
        <div className="static">
          <div className=" relative overflow-y-auto">
            <div className="relative flex justify-between ">
              <h2 className="text-xl font-bold">{data.title}</h2>
              <div
                className="sticky top-0  m-4 cursor-pointer text-4xl"
                onClick={closeModal}
              >
                &times;
              </div>
            </div>
            <p>{data.body}</p>
            <div className=" mt-3 p-3 pr-1 rounded-md">
              <h1 className="font-bold">Comments</h1>
              {loading ? (
                <LoadingSpinner />
              ) : (
                <div className="overflow-y-auto max-h-[30vh]">
                  {comments.length === 0 ? (
                    <p>No comments yet...</p>
                  ) : (
                    comments.map((comment: any) => (
                      <div key={comment.id} className="bg-white rounded-xl m-1 mr-0 p-2">
                        <div className="text-slate-300">
                          <strong className="text-black text-md">{comment?.name}</strong>{" "}
                          <p className="line-clamp-1 inline">{comment?.email}</p>
                        </div>
                        <p>{comment?.body}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default DetailModal;
