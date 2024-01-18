import React, { useRef } from "react";
import { FiPlusCircle } from "react-icons/fi";

import { useNavigate } from 'react-router-dom';

  

function DocUpload() {
  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);
  const fileInput3 = useRef(null);
  const fileInput4 = useRef(null);
  const navigate = useNavigate();


  const greenFormSubmit = () => {
      navigate("/GreenFormSubmit");
  }
  const Ewaybillgrpalldocgo = () => {
    navigate("/Ewaybillgrpalldoc");
  }
  const handleClick = (inputRef) => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="bg-gradient-to-tr from-white to-green-400  h-screen flex justify-center items-center mt-10">
      
      <div className="flex flex-row  w-100 h-4/5 bg-white rounded-md shadow-sm shadow-gray-300">

      <div className='h-100 mt-4 ml-4 mb-4 border-solid border-5  overflow-hidden w-[600px] border-2xl border-green-700'>
         <iframe title="PDF Viewer" src="ewaygmn(_.pdf" className='h-[110%] w-full overflow-hidden border-2xl border-green-700'></iframe>
       </div>
       <div className="pt-5 flex flex-col justify-center items-center w-[600px] h-4/5 bg-white rounded-md shadow-sm shadow-gray-300">
      <h2 className="text-3xl font-bold text-green-500 mb-4 mt-10">Upload Additional Documents</h2>
        <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
        <div className="flex flex-col h-2/3  w-100 ">
          <div className="flex gap-20">
            <h3 className="ml-10 text-gray-500 text-lg font-bold ">GR<span className="text-red-500 ml-1 text-lg">**</span></h3>
            <h3 className="ml-10 text-gray-500 text-lg font-bold ">Invoice<span className="text-red-500 ml-1 text-lg">**</span></h3>
          </div>
         
          <div className="  flex justify-around items-center h-1/2">
            <div className="m-4  border-4 border-dashed border-green-400 p-12 flex items-center justify-center">
              <input type="file" ref={fileInput1} style={{ display: 'none' }} required/>
              <FiPlusCircle onClick={() => handleClick(fileInput1)} className="text-3xl text-gray-400"/>
            </div>
            <div>
               <div className=" m-4 border-4 border-dashed border-green-400 p-12 flex items-center justify-center">
              <input type="file" ref={fileInput2} style={{ display: 'none' }} />
              <FiPlusCircle onClick={() => handleClick(fileInput2)} className="text-3xl text-gray-400"/>
            </div>
            </div>
           
          </div>
          <div className="flex justify-around items-center h-1/2">
            <div className="m-4 border-4  border-dashed border-green-400 p-12 flex items-center justify-center">
              <input type="file" ref={fileInput3} style={{ display: 'none' }} />
              <FiPlusCircle onClick={() => handleClick(fileInput3)} className="text-3xl text-gray-400"/>
            </div>
            <div className="m-4 border-4  border-dashed border-green-400 p-12 flex items-center justify-center">
              <input type="file" ref={fileInput4} style={{ display: 'none' }} />
              <FiPlusCircle onClick={() => handleClick(fileInput4)} className="text-3xl text-gray-400"/>
            </div>
          </div>
        </div>
        <button className=" border-2 mt-10 mb-4  border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold"
        onClick={greenFormSubmit}
        >Way To E-Way bill</button>
      </div>
      </div>
    </div>
  );
}

export default DocUpload