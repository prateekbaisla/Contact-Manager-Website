import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import { removeContact } from "./middleware/store";

const Card = ({ details }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="lg:w-[300px] w-[250px] border border-gray-300 bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105">
  <p className="text-lg font-semibold text-gray-800">
    {details.firstName} {details.lastName}
  </p>
  <div className="flex items-center justify-between gap-3 mt-5">
    <Link to="/contacts/edit" state={details} className="w-full">
      <Button text="Edit" variant="edit" className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300" />
    </Link>
    <Button
      onClick={() => {
        dispatch(removeContact(details?.id));
      }}
      text="Delete"
      variant="delete"
      className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors duration-300"
    />
  </div>
</div>

  );
};

export default Card;
