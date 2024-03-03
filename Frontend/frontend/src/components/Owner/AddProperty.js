import React, { useState } from 'react';
import axios from 'axios';
import {config} from '../../Token'
import { toast } from 'react-toastify';
import { BASE_URL } from '../../url';

const AddProperty = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    userId: sessionStorage.getItem('id'),
    instructions: "",
    isAvailable: 0,
    deposit: 0,
    rent: 0,
    society: "",
    landmark: "",
    cityName: "",
    area: "",
    state: "",
    pincode: 0,
    categoryName: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };


  const handleReset = () => {
    // Reset the form fields to their initial state
    setPropertyDetails({
      userId: sessionStorage.getItem('id'),
      instructions: "",
      isAvailable: 0,
      deposit: 0,
      rent: 0,
      society: "",
      landmark: "",
      cityName: "",
      area: "",
      state: "",
      pincode: 0,
      categoryName: "",
      description: ""
    });
  };


  // const token = sessionStorage.getItem('jwt'); // Retrieve JWT token from session storage
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}` // Include JWT token in the request headers
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to your server with the property data
    axios
      .post(`${BASE_URL}/property/add`, propertyDetails,config)
      .then((response) => {
        // Handle success, e.g., show a success message
        toast.success("PropertyDetails Added Successfully");
        console.log('Property added successfully', response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        toast.success("Something Error Occure");
        console.error('Error adding property');
      });
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h2 className="text-center mb-4">Add New Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">User ID:</label>
            <input
              type="text"
              className="form-control"
              id="userId"
              name="userId"
              value={propertyDetails.userId}
              onChange={handleChange}
              placeholder="Enter User ID"
              disabled
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="isAvailable" className="form-label">Property Status:</label>
            <input
              type="number"
              className="form-control"
              id="isAvailable"
              name="isAvailable"
              min="0"
              max="1"
              value={propertyDetails.isAvailable}
              onChange={handleChange}
              placeholder="Enter Property Status"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="instruction" className="form-label">Instruction:</label>
            <input
              type="text"
              className="form-control"
              id="instructions"
              name="instructions"
              value={propertyDetails.instructions}
              onChange={handleChange}
              placeholder="Add Instruction"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="deposit" className="form-label">Deposit:</label>
            <input
              type="number"
              className="form-control"
              id="deposit"
              name="deposit"
              value={propertyDetails.deposit}
              onChange={handleChange}
              placeholder="Add Deposit"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="rent" className="form-label">Rent:</label>
            <input
              type="number"
              className="form-control"
              id="rent"
              name="rent"
              value={propertyDetails.rent}
              onChange={handleChange}
              placeholder="Enter Rent"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="categoryName" className="form-label">Flat Category:</label>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              name="categoryName"
              value={propertyDetails.categoryName}
              onChange={handleChange}
              placeholder="e.g., 1BHK, 2BHK, 3BHK"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="society" className="form-label">Society:</label>
            <input
              type="text"
              className="form-control"
              id="society"
              name="society"
              value={propertyDetails.society}
              onChange={handleChange}
              placeholder="Enter Society Name"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="landmark" className="form-label">Landmark:</label>
            <input
              type="text"
              className="form-control"
              id="landmark"
              name="landmark"
              value={propertyDetails.landmark}
              onChange={handleChange}
              placeholder="Enter Landmark"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="area" className="form-label">Area:</label>
            <input
              type="text"
              className="form-control"
              id="area"
              name="area"
              value={propertyDetails.area}
              onChange={handleChange}
              placeholder="Enter Area"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="state" className="form-label">State:</label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={propertyDetails.state}
              onChange={handleChange}
              placeholder="Enter State (e.g., Maharashtra)"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="city" className="form-label">City Name:</label>
            <input
              type="text"
              className="form-control"
              id="cityName"
              name="cityName"
              value={propertyDetails.cityName}
              onChange={handleChange}
              placeholder="Enter City Name (e.g., Pune)"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="pincode" className="form-label">Pincode:</label>
            <input
              type="number"
              className="form-control"
              id="pincode"
              name="pincode"
              maxLength="6"
              value={propertyDetails.pincode}
              onChange={handleChange}
              placeholder="Enter Pincode (e.g., 412006)"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={propertyDetails.description}
              onChange={handleChange}
              placeholder="Add Description"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary me-3">Add Property</button>
            <button type="reset" className="btn btn-secondary" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  

  );
};

export default AddProperty;  