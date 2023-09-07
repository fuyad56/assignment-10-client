import React from "react";
import Manage from "../icons/grid 1.png";
import Plus from "../icons/plus 1.png";
import Edit from "../icons/edit 1.png";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="bg-[#F4F7FC]">
      <div className="flex justify-between items-start">
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
            className="px-6 py-4 flex items-center text-white active:bg-[#2F216A]"
          >
            <img src={Edit} alt="" className="w-[18%] pr-4" />
            Edit Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
