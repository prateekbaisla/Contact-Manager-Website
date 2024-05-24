import React from "react";

const Button = ({ text, onClick, width, variant }: any) => {
  return (
    <>
      {variant === "edit" ? (
        <button
          onClick={onClick}
          className="border-green-500 p-2 border text-base text-green-500 uppercase w-full rounded transition-colors duration-300 hover:bg-green-200 hover:text-green-500 hover:border-green-500 hover:shadow-md"
        >
          {text}
        </button>

      ) : variant === "delete" ? (
        <button onClick={onClick} className="border-red-400 p-2 border text-base text-red-400 hover:bg-red-100 uppercase w-full rounded hover:shadow-md">
          {text}
        </button>
      ) : (
        <button
  onClick={onClick}
  className={`bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-3 py-2 text-sm font-medium tracking-widest uppercase rounded-md shadow-md transition duration-300 mx-auto mt-8 block`}
>
  {text}
</button>



      )}
    </>
  );
};

export default Button;
