import React from "react";

const Book = (props) => {
  const dt = props.data;

  return (
    <div className="border w-full px-8 py-8 rounded-2xl shadow-xl mx-4 my-4 hover:scale-[1.1] duration-500">
      <div className="bg-[#F1F1F1] rounded-2xl px-4 py-8">
        <img src={dt.image} alt="" className="w-[90%] mx-auto" />
      </div>
      <h1 className="text-2xl font-bold my-2">{dt.name}</h1>
      <h3 className="text-xl font-medium">{dt.author}</h3>
      <div className="flex justify-between items-center mt-5">
        <h4 className="text-5xl font-bold text-[#6946F4]">${dt.price}</h4>
        <button className="text-lg font-semibold text-white bg-[#6946F4] px-8 py-4 rounded-xl">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Book;
