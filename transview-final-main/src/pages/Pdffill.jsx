// import React from 'react';


// const Pdffill = () => {
    
//     const eway = () => {
       
//         window.location.href ="/e-way-bill.pdf";
//       }

//     const CnmtNo = () => {
//         window.location.href ="/CnmtNo-CNCTK090967.pdf";
//       }
    
//     return (
//         <div className='flex items-center justify-center h-screen bg-gray-100'>
//             <div className='pt-20 w-1/2 border-5 border-solid border-gray-200 shadow-md rounded-lg flex justify-around bg-green-500 h-1/2'>
//                 <div className='ewaybill'>
//                     <div className='mt-2 mb-2 font-bold'>
//                         E-Way Bill
//                     </div>
                    
//                     <div className=' shadow-md rounded-lg mt-2 border border-solid border-black text-white bg-gray-500  p-2 pl-19 text-xl'
//                     onClick={eway}
//                     >
//                         <button>BIll</button>
//                     </div>
//                 </div>
//                 <div className='Doucoment'>
//                     <div className='mt-2 mb-2 font-bold'>
//                         Doucoment
//                     </div>
                  
//                     <div className='shadow-md rounded-lg mt-2 border border-solid border-black text-white bg-gray-500  p-2 pl-19 text-xl'
//                      onClick={CnmtNo}
//                     >
//                         <button>Doucoment</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pdffill;
import React from "react";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Pdffill() {
  const navigator = useNavigate();
    const eway = () => {
      window.location.href = "/ewaygmn(.pdf";
      }

      const greengp = () => {
        window.location.href= "/greenFormPdf(.pdf";
       }
       
    const CnmtNo = () => {
        window.location.href ="/pg.pdf";
      }
  return (
    <div className="bg-gradient-to-tr relative from-white to-green-400 h-screen flex justify-center items-center">
      <div
        action=""
        className="flex flex-col justify-center items-center align-middle w-3/5 h-3/5 bg-white rounded-md shadow-sm shadow-gray-300"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-4 mt-4">
          Fetch Documents
        </h2>
        <div className="border-2 w-10 border-green-500 inline-block mb-5"></div>
        <p className="text-gray-400 mb-6 text-lg">Click on the Button below</p>
        <div className="flex justify-evenly w-full">
               <button className="border-2  border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold" onClick={eway}>TSL</button>
               <button className="border-2  border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold" onClick={greengp}>Green Form</button>
               <button className="border-2  border-green-500 bg-green-500 cursor-pointer text-white rounded-full px-12 py-2 inline-block font-semibold" onClick={CnmtNo}>DPOD</button>
        </div>
        
      </div>
    </div>
  );
}

export default Pdffill;

