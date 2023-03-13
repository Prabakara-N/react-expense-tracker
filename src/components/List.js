import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const List = ({ transactions, deleteTransaction, editTransaction }) => {
  return (
    <>
      {transactions.map((transaction) => {
        const { id, title, amount } = transaction;
        return (
          <ul className="lists" key={id}>
            <li className="minus">
              <span>{title}</span> <span> {amount}</span>
              <button
                className="update-btn btn"
                type="button"
                onClick={() => editTransaction(id)}
              >
                <AiFillEdit />
              </button>
              <button
                type="button"
                className="delete-btn btn"
                onClick={() => deleteTransaction(id)}
              >
                <MdDelete />
              </button>
            </li>

            {/* <li className="plus">
            <span>Cash</span> <span> 1000</span>
            <button className="update-btn btn">
              <AiFillEdit />
            </button>
            <button className="delete-btn btn">
              <MdDelete />
            </button>
          </li> */}
          </ul>
        );
      })}
    </>
  );
};

export default List;
