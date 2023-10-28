"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton ? (
        <button
          onClick={scrollToTop}
          className={` animate-bounce transition-opacity transition-transform fixed z-[100] md:bottom-8 bottom-5 md:right-8 right-5 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transform translate-y-0 duration-300 ease-in-out opacity-100 duration-300 ease-in-out`}
        >
          <FaArrowUp />
        </button>
      ) : null}
    </>
  );
};

export default ScrollToTopButton;
