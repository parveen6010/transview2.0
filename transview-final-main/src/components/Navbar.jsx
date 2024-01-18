// import React from "react";
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className="w-full p-2 fixed top-0  z-20 bg-white shadow-gray-500 shadow-md ">
//       <nav className="flex justify-between p-2">
//         <div className="">
//           <a href="/dashboard" className="text-3xl font-bold text-gray-700 pl-4">
//            Transvue Soultions
          
//           </a>
//         </div>
//         <ul className="flex justify-evenly items-center w-[40%]">
//           <li>
//             <a
//               href="/dashboard"
//               className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="/VehicleTracking"
//               className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
//             >
//               Track My vehicle
//             </a>
//           </li>
//           <li>
//             <a
//               href="/verify"
//               className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
//             >
//               View Vehicle Document
//             </a>
//           </li>
//           <li>
//             <a
//               href="/temp2"
//               className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
//             >
//               Fill e-way Bill
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;




import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full p-2 fixed top-0 z-20 bg-white shadow-gray-500 shadow-md">
      <nav className="flex justify-between p-2">
        <div className="">
          <Link to="/dashboard" className="text-3xl font-bold text-gray-700 pl-4">
            Transvue Soultions
          </Link>
        </div>
        <ul className="flex justify-evenly items-center w-[40%]">
          <li>
            <Link
              to="/dashboard"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/VehicleTracking"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              Track My vehicle
            </Link>
          </li>
          <li>
            <Link
              to="/verify"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              View Vehicle Document
            </Link>
          </li>
          <li>
            <Link
              to="/temp2"
              className="text-base font-bold text-gray-700 hover:border-b-2 hover:border-green-500"
            >
              Fill e-way Bill
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
