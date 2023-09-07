import React, { useState } from "react";
import Book from "./Book";
import Spinner from "../icons/Group 33149.png";

const Home = () => {
  const [data, setData] = useState([]);
  const url = `http://localhost:5000/books`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));

  return (
    <div>
      <div className="h-[20rem] flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Books"
          className="text-lg font-semibold px-2 py-[14px] border-2 rounded-s w-[500px]"
        />
        <button className="text-lg font-semibold text-white bg-[#6946F4] px-8 py-4 rounded-e">
          Search
        </button>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-3 gap-[60px] mx-[150px] mb-[200px]">
          {data.map((dt) => (
            <Book key={dt.image} data={dt}></Book>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <img src={Spinner} alt="" className="w-[3%] animate-spin" />
        </div>
      )}
    </div>
  );
};

export default Home;
