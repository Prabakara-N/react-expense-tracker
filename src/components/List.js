import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const List = () => {
  return (
    <>
      <div className="history-container">
        <div className="history-title">
          <h2>History</h2>
        </div>
        <ul className="lists" id="lists">
          <li className="minus">
            <span>Cash</span> <span> -500</span>
            <button className="update-btn btn">
              <AiFillEdit />
            </button>
            <button className="delete-btn btn">
              <MdDelete />
            </button>
          </li>

          <li className="plus">
            <span>Cash</span> <span> 1000</span>
            <button className="update-btn btn">
              <AiFillEdit />
            </button>
            <button className="delete-btn btn">
              <MdDelete />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default List;
