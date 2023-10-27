"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/postCard";
import DetailModal from "@/components/detailModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import chunkArray from "@/helper/chunkArray";

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModalOpen, setDataModalOpen] = useState();
  const [array, setArray] = useState([]);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    const apiUrl = "https://gorest.co.in/public/v2/posts";

    fetch(apiUrl)
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data)
        setArray(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const chunkedCards = chunkArray({ arr: array, size: 6 });

  return (
    <section className="min-h-screen bg-primary max-w-screen flex flex-col items-center">
      {isModalOpen && <DetailModal data={dataModalOpen} onClose={closeModal} />}
      <div className="p-5">
        <div className="font-roboto font-black self-start m-5  text-white [text-shadow:0px_4px_4px_var(--tw-shadow-color)] shadow-black text-4xl relative">
          Post Section
        </div>
        <div className="bg-white mt-5 w-[90vw] h-[2px] [text-shadow:0px_4px_4px_var(--tw-shadow-color)] shadow-black" />
        <p className="text-white text-roboto"> Section ini merupakan bagian swipper dengan data didapat dari post menggunakan server-side data fetching. Dilengkapi dengan clickable pagination yang interactive</p>
      </div>
      <div className="sm:px-8 max-w-[90vw] mx-auto relative top-[40%]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {chunkedCards.map((array, index) => (
            <SwiperSlide key={index} className="mb-8">
              <div className="grid gap-2 sm:gap-5 grid-cols-2 lg:grid-cols-3">
                {array.map((post, index) => (
                  <Card post={post} key={index} onClick={openModal} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Post;
