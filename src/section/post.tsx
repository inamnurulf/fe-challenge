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
import calculateChunkSize from "@/helper/calculateChunkSIze";
import LoadingSpinner from "@/components/loadingSpinner";

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModalOpen, setDataModalOpen] = useState();
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const openModal = (data: any) => {
    setDataModalOpen(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const apiUrl = "https://gorest.co.in/public/v2/posts";

    fetch(apiUrl)
      .then((response) => response.json())
      .then(async (data) => {
        setArray(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const chunkSize = calculateChunkSize(windowSize);
  const chunkedCards = chunkArray({ arr: array, size: chunkSize });
  return (
    <section className="min-h-screen bg-primary max-w-screen flex flex-col items-center">
      {isModalOpen && <DetailModal data={dataModalOpen} onClose={closeModal} />}
      <div className="p-5 w-[90vw]">
        <div className="font-roboto font-black self-start m-5  text-white [text-shadow:0px_4px_4px_var(--tw-shadow-color)] shadow-black text-4xl relative">
          Post Section
        </div>
        <div className="bg-white mt-5 w-full h-[2px] [text-shadow:0px_4px_4px_var(--tw-shadow-color)] shadow-black" />
        <p className="text-white text-roboto">
          {" "}
          Section ini merupakan bagian swipper dilengkapi dengan clickable
          pagination yang interactive. Swipper tersebut dikembangkan dengan
          mempertimbangkan responsivitasnya sehingga dapat fit dalam berbagai
          ukuran layar.
        </p>
      </div>
      <div className="sm:px-8 max-w-[90vw] mx-auto relative top-[40%]">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {chunkedCards.map((array, index) => (
              <SwiperSlide key={index} className="mb-8">
                <div className="grid gap-2 sm:gap-5 grid-cols-2 lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
                  {array.map((post, index) => (
                    <Card
                      post={post}
                      key={index}
                      onClick={() => openModal(post)}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Post;
