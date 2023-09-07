import React, { useEffect, useState } from "react";
import Manage from "../icons/grid 1.png";
import Plus from "../icons/plus 1.png";
import Edit from "../icons/edit 1.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBookData(data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, [id]);

  const navigate = useNavigate();
  const handleSave = () => {
    fetch(`http://localhost:5000/updateBook/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookData)
    })
      .then((response) => response.json())
      .then((updatedData) => {
        console.log("Book updated:", updatedData);
        // Redirect to the book details page or another route after saving
        navigate(`/admin/manage-books`);
      })
      .catch((error) => {
        console.error("Error updating book:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
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
            className="px-6 py-4 flex items-center text-white active:bg-[#2F216A]"
          >
            <img src={Plus} alt="" className="w-[18%] pr-4" />
            Add Book
          </Link>
          <Link
            to={"/admin/edit-book"}
            className="px-6 py-4 flex items-center text-white bg-[#2F216A] active:bg-[#2F216A]"
          >
            <img src={Edit} alt="" className="w-[18%] pr-4" />
            Edit Book
          </Link>
        </div>
        <div className="mx-[50px] my-[50px] w-[95rem]">
          <div className="border rounded-2xl shadow-xl py-14 px-14 grid grid-cols-2">
            <div className="flex flex-col-reverse my-4">
              <input
                type="text"
                name="book-name"
                className="py-4 px-2 rounded-lg mx-6"
                placeholder="Enter Name"
                defaultValue={bookData.name || ""}
                onChange={handleInputChange}
              />
              <label
                htmlFor="book-name"
                className="text-lg font-[700] py-2 px-8"
              >
                Book Name
              </label>
            </div>
            <div className="flex flex-col-reverse my-4">
              <input
                type="text"
                name="author-name"
                className="py-4 px-2 rounded-lg mx-6"
                placeholder="Enter Name"
                defaultValue={bookData.author || ""}
                onChange={handleInputChange}
              />
              <label
                htmlFor="author-name"
                className="text-lg font-[700] py-2 px-8"
              >
                Author Name
              </label>
            </div>
            <div className="flex flex-col-reverse my-4">
              <input
                type="number"
                name="add-price"
                className="py-4 px-2 rounded-lg mx-6"
                placeholder="Enter Price"
                defaultValue={bookData.price || ""}
                onChange={handleInputChange}
              />
              <label
                htmlFor="add-price"
                className="text-lg font-[700] py-2 px-8"
              >
                Add Price
              </label>
            </div>
            <div className="flex flex-col-reverse my-4">
              <input
                type="file"
                name="add-img"
                className="py-4 px-2 rounded-lg mx-6"
              />
              <label htmlFor="add-img" className="text-lg font-[700] py-2 px-8">
                Add Image
              </label>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="text-lg font-semibold text-white bg-[#6946F4] px-8 py-4 rounded-xl mt-6 absolute right-0 mx-[60px]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
