import React, { useState } from "react";
import "../app/globals.css";

const DetailModal = ({ data, onClose }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const [comments, setComments] = useState([
    {
      id: 65940,
      post_id: 80703,
      name: "Ojaswini Kakkar",
      email: "kakkar_ojaswini@torphy.example",
      body: "Aspernatur voluptatem rerum. Autem similique incidunt. Aspernatur nihil corporis.",
    },
    {
      id: 65939,
      post_id: 80703,
      name: "Adhiraj Kocchar",
      email: "adhiraj_kocchar@gottlieb-leffler.test",
      body: "Sint aut voluptas. Velit facere est.",
    },
    {
      id: 65939,
      post_id: 80703,
      name: "Adhiraj Kocchar",
      email: "adhiraj_kocchar@gottlieb-leffler.test",
      body: "Sint aut voluptas. Velit facere est.",
    },
    {
      id: 65939,
      post_id: 80703,
      name: "Adhiraj Kocchar",
      email: "adhiraj_kocchar@gottlieb-leffler.test",
      body: "Sint aut voluptas. Velit facere est.",
    },
  ]);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };
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
              <div className="overflow-y-auto max-h-[30vh]">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white rounded-xl m-1 mr-0 p-2"
                  >
                    <p className="text-slate-300">
                      <strong className="text-black text-md">
                        {comment.name}
                      </strong>{" "}
                      <p className="line-clamp-1 inline">{comment.email}</p>
                    </p>
                    <p>{comment.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default DetailModal;
