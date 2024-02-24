import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Signin from './pages/Signin/Signin';
import Home from './pages/Home/Home';
import Delhi from './components/Delhi';
import Register from './pages/Register/Register';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from './pages/Contact/Contactus';
import Admin from '../src/components/Admin/Admin';
import CitiesChange from './components/CitiesChange';
import ForgotPassword from './components/Profile/Forgpas';
import UsersPage from './components/UsersPage';
import AddProperty from './components/Owner/AddProperty';
import PropertyResponse from './components/Owner/ShowPropertyList';
import Pending from './components/Admin/Pending';
import AllUsers from './components/Admin/AllUsers';
import Approved from './components/Admin/Approved';
import Customers from "./components/Admin/Customers";
import Owners from "./components/Admin/Owners";
import PropertyDetail from '../src/components/Admin/PropertyDetail';
import PropertyGrid from "./components/Admin/PropertyGrid";
import CitiesPage from "./components/Admin/AddCity";
import FetchPropertyReviewByUserId from "./components/User/FetchReviewsByUserId";
import FetchPropertyReview from "./components/User/FetchReviewsByPropId ";
import User from "./components/User/User"
import AddReview from './components/User/AddReview';
import AllPropertyList from './components/User/AllPropertyList'
import ImageUploadForm from './components/Owner/AddImage'
import CitiesList from './components/Admin/CitiesList';
import ViewImages from './components/User/ViewImages'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/:cityName' element={<Delhi />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/PropertyDetail' element={<PropertyDetail />} />
          <Route path='/Contactus' element={<ContactUs />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/properties' element={<PropertyDetail />} />

          <Route path='/cities' element={<CitiesChange />} />
          <Route path='/CitiesList' element={<CitiesList />} />
      


          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/UsersPage" element={<UsersPage />} />
          <Route path="/AddProperty" element={<AddProperty />} />
          <Route path="/UsersPage" element={<UsersPage />} />
          <Route path="/ShowPropertyList" element={<PropertyResponse />} />
          <Route path="/addimage" element={<ImageUploadForm />} />



          {/*admin*/}
          <Route path="/propertylist" element={<PropertyGrid />} />
          <Route path="/addcity" element={<CitiesPage />} />
          <Route path="/citieslist" element={<CitiesList />} />
          <Route path="/pendinglist" element={<Pending />} />
          <Route path="/alluserslist" element={<AllUsers />} />
          <Route path="/approveduserslist" element={<Approved />} />
          <Route path="/ownerslist" element={<Owners />} />
          <Route path="/Customerslist" element={<Customers />} />

          {/*User*/}
          <Route path='/allpropertylist' element={<AllPropertyList />} />
          <Route path='/addreview' element={<AddReview />} />
          <Route path="/all_review_by_userid" element={<FetchPropertyReviewByUserId />} />
          <Route path="/all_propr_review" element={<FetchPropertyReview />} />
          <Route path='/user' element={<User />} />
          <Route path='/viewimages' element={<ViewImages />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
