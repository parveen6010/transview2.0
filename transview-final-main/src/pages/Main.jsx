// In your Main.jsx file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomePage from './HomePage';
import GreenForm from '../components/GreenForm';
import GreenFormSubmit from '../components/GreenFormSubmit';
import Ewaybill from '../components/Ewaybill';
import Temp2 from '../components/Temp2';
import Dashboard from './Dashboard';
import Pdffill from './Pdffill';
import Verify from './Verify';
import AuthorizationForm from '../components/AuthorizationForm';
import Payment from '../components/Payment';
import Grpdfalldoc from '../components/Grpdfalldoc';
import Ewaybillgrpalldoc from '../components/Ewaybillgrpalldoc';
import DocUpload from "../components/DocUpload";
import Trip from '../components/Trip';
import VehicleTracking from '../components/VehicleTracking';
import Ewayauth from '../components/Ewayauth';
import Temp23 from '../components/Temp23';
import VehicleRc  from '../components/VehicleRc';
import TrackAuth from '../components/TrackAuth';
import { useState } from 'react';
function Main() {
  const [formData,setFormData]=useState({});
  const [greenFormInfo,setGreenFormInfo]=useState({});
  const [ewaybill , setewaybill] = useState("");
  return (
    <div className='flex flex-col'>
     
      <Router>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/green-form" element={<GreenForm formData={formData} greenFormInfo={greenFormInfo} setGreenFormInfo={setGreenFormInfo} />} />
          <Route path="/GreenFormSubmit" element={<GreenFormSubmit  formData={formData}  greenFormInfo={greenFormInfo} />} />
          <Route path="/temp2" element={<Temp2  ewaybill = {ewaybill} formData={formData} setFormData={setFormData}/>} />
          <Route path="/temp23" element={<Temp23 formData={formData} greenFormInfo={greenFormInfo}/>} />
          <Route path="/ewaybill" element={<Ewaybill />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pdffill" element={<Pdffill />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/AuthorizationForm" element={<AuthorizationForm  />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/grpdfalldoc" element={<Grpdfalldoc />} />
          <Route path="/Ewaybillgrpalldoc" element={<Ewaybillgrpalldoc />} />
          <Route path="/docupload" element={<DocUpload />} />
          <Route path="/vehicleTracking" element={<VehicleTracking />} />
          <Route path="/Trip" element={<Trip />} />
          <Route path="/ewayauth" element={<Ewayauth ewaybill = {ewaybill} setewaybill = {setewaybill} />} />
          <Route path="/VehicleRc" element={<VehicleRc />} />
          <Route path="/TrackAuth" element={<TrackAuth />} />

        </Routes>
      </Router>
    </div>
  );
}

export default Main;
