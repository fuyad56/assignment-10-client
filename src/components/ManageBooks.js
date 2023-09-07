import React, { useState } from "react";
import Manage from "../icons/grid 1.png";
import Plus from "../icons/plus 1.png";
import Edit from "../icons/edit 1.png";
import EditItem from "../icons/Group 307.png";
import Delete from "../icons/Group 33150.png";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../icons/Group 33149.png";

const ManageBooks = () => {
  const [data, setData] = useState([]);
  const url = `http://localhost:5000/books`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteBook/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((deletedItem) => {
        if (deletedItem) {
          const updatedData = data.filter((dt) => dt._id !== deletedItem._id);
          setData(updatedData);

          window.location.reload();
        } else {
          console.error("Book not found");
        }
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  const navigate = useNavigate();
  
  const handleEdit = (id) => {

    const selectedItem = data.find((dt) => dt._id === id);
    if (selectedItem) {
      navigate(`/admin/edit-book/${id}`);
    }
  };

  return (
    <div className="bg-[#F4F7FC]">
      <div className="flex justify-between items-start">
        <div className="bg-[#19103F] w-[15%] h-[90vh] box-border shadow-xl">
          <Link
            to={"/admin/manage-books"}
            className="px-6 py-4 flex items-center text-white bg-[#2F216A] active:bg-[#2F216A]"
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
            className="px-6 py-4 flex items-center text-white active:bg-[#2F216A]"
          >
            <img src={Edit} alt="" className="w-[18%] pr-4" />
            Edit Book
          </Link>
        </div>
        <div>
          <table class="table-fixed w-[100rem] mt-6">
            <thead className="bg-white rounded-lg">
              <tr>
                <th className="text-xl py-4">Book Name</th>
                <th className="text-xl py-4">Author Name</th>
                <th className="text-xl py-4">Price</th>
                <th className="text-xl py-4">Action</th>
              </tr>
            </thead>
            {data.length > 0 ? (
              <tbody>
                {data.map((dt) => (
                  <tr className="text-center" key={dt.name}>
                    <td className="text-[1rem] font-[600]">{dt.name}</td>
                    <td className="text-[1rem] font-[600]">{dt.author}</td>
                    <td className="text-[1rem] font-[600]">$ {dt.price}</td>
                    <td className="flex justify-center items-center mx-auto">
                      <img
                        src={EditItem}
                        alt=""
                        onClick={() => handleEdit(dt._id)}
                        className="w-[10%] px-1 py-2 cursor-pointer"
                      />
                      <img
                        src={Delete}
                        alt=""
                        onClick={() => handleDelete(dt._id)}
                        className="w-[10%] px-1 py-2 cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <div className="flex items-center justify-center mt-[200px] mx-auto w-full">
                <img src={Spinner} alt="" className="w-[20%] animate-spin" />
              </div>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
