import React from "react";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function Verify() {
        const navigate = useNavigate();

       const verifycall = () => {
          navigate("/pdffill");
       }
  return (
    <div className="bg-gradient-to-tr relative from-white to-green-400 h-screen flex justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center items-center align-middle w-3/5 h-3/5 bg-white rounded-md shadow-sm shadow-gray-300"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-4 mt-4">
          Have a Look At Your Document
        </h2>
        <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
        <p className="text-gray-400 mb-4 text-lg">Enter TSL</p>
        <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-4 w-1/2 rounded-md">
          <MdOutlineConfirmationNumber className="text-gray-400 mr-2" />
          <input
            type="number"
            className="bg-gray-200 outline-none text-sm flex-1"
            name="TSL"
            placeholder="TSL"
          />
        </div>
        <div className="flex flex-row justify-evenly w-full pb-5">
          <button
            type="button"
            className="border-2  border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold"
            onClick={verifycall}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Verify;

