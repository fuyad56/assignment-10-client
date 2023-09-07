import React, { useState } from "react";
import Manage from "../icons/grid 1.png";
import Plus from "../icons/plus 1.png";
import Edit from "../icons/edit 1.png";
import { Link } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const [imageFile, setImageFile] = useState();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    price: ""
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const bookData = {
      name: formData.name,
      author: formData.author,
      image: imageFile,
      price: formData.price
    };
    const url = `http://localhost:5000/addBook`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bookData)
    }).then((response) => {
      console.log("server side response: " + response);
    });

    console.log(bookData);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageData = new FormData();
    imageData.set("key", "d9b194181895d3ec35d6671922e4b45e");
    imageData.append("image", file);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        setImageFile(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="bg-[#F4F7FC]">
      <div className="flex items-start">
        <div className="bg-[#19103F] w-[15%] h-[90vh] box-border shadow-xl">
          <Link
            to={"/admin/manage-books"}
            className="px-6 py-4 flex items-center text-white active:bg-[#2F216A]"
          >
            <img src={Manage} alt="" className="w-[18%] pr-4" />
            Manage Books
          </Link>
          <Link
            to={"/admin/add-book"}
            className="px-6 py-4 flex items-center text-white bg-[#2F216A] active:bg-[#2F216A]"
          >
            <img src={Plus} alt="" className="w-[18%] pr-4" />
            Add Book
          </Link>
          <Link
            to={"/admin/edit-book"}
            className="px-6 py-4 flex items-center text-white active:bg-[#2F216A]"
          >
            <img src={Edit} alt="" className="w-[18%] pr-4" />
            Edit Book
          </Link>
        </div>
        <div className="mx-[50px] my-[50px] w-[95rem]">
          <form
            onSubmit={onSubmit}
            className="border rounded-2xl shadow-xl py-14 px-14 grid grid-cols-2"
          >
            <div className="flex flex-col-reverse my-4">
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                className="py-4 px-2 rounded-lg mx-6"
                placeholder="Enter Name"
              />
              <label htmlFor="name" className="text-lg font-[700] py-2 px-8">
                Book Name
              </label>
            </div>
            <div className="flex flex-col-reverse my-4">
              <input
                type="text"
                name="author"
                onChange={handleInputChange}
                className="py-4 px-2 rounded-lg mx-6"
                placeholder="Enter Name"
              />
              <label htmlFor="author" className="text-lg font-[700] py-2 px-8">
                Author Name
              </label>
            </div>
            <div className="flex flex-col-reverse my-4">
              <input
                type="number"
                name="price"
                onChange={handleInputChange}
                className="py-4 px-2 rounded-lg mx-6"
                placeholder="Enter Price"
              />
              <label htmlFor="price" className="text-lg font-[700] py-2 px-8">
                Add Price
              </label>
            </div>
            <div className="flex flex-col-reverse my-4">
              <input
                type="file"
                name="image"
                className="py-4 px-2 rounded-lg mx-6"
                onChange={handleImageUpload}
              />
              <label htmlFor="image" className="text-lg font-[700] py-2 px-8">
                Add Image
              </label>
            </div>
            <button
              type="submit"
              className="text-lg font-semibold text-white bg-[#6946F4] px-8 py-4 rounded-xl mt-6 w-[50%] mx-6"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
