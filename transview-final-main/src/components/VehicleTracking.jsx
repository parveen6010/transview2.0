import React from 'react'
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


    


function VehicleTracking() {
  const navigate = useNavigate();

    const Tripgo = () => {
        navigate("/Trip");
    }
    return (
        <div className="bg-gradient-to-tr from-white to-green-400  h-screen flex justify-center items-center">
          <form
            action=""
            className="flex flex-col justify-center items-center align-middle w-3/5 h-3/5 bg-white rounded-md shadow-sm shadow-gray-300"
          >
            <h2 className="text-3xl font-bold text-green-500 mb-4 mt-4">
              Vehicle Tracking
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
            {/* <p className="text-gray-400 mb-4 text-lg">Enter E-Way Bill Number</p> */}
            <div className="bg-gray-200 p-2 flex flex-row items-center mr-2 mb-4 w-1/2 rounded-md">
              <MdOutlineConfirmationNumber className="text-gray-400 mr-2" />
              <input
                type="number"
                className="bg-gray-200 outline-none text-sm flex-1"
                name="TSL"
                placeholder="Enter TSL Number"
              />
            </div>
            <div className="flex flex-row justify-evenly w-full pb-5">
              <button
                type="button"
                className="border-2  border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold"
           onClick={Tripgo}
         >
                Track
              </button>
            </div>
          </form>
        </div>
      );
}

export default VehicleTracking