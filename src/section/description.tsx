import React from "react";

const Description = () => {
  return (
    <section className="min-h-screen bg-primary flex justify-center items-center">
      <div className="text-white w-[80vw] text-center">
        Project ini dikembangkan dengan menggunakan Next JS (TypeScript). Data
        diambil dari <a href={"https://gorest.co.in"} className="underline">https://gorest.co.in</a>{" "}
        sesuai dengan ketentuan. Design dari website ini dikembangkan
        menggunakan figma. Terima kasih..{" "}
      </div>
    </section>
  );
};

export default Description;
