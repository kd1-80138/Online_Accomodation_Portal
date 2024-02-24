import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from '../../url';
import {config} from '../../Token'
import { ToastContainer ,toast } from "react-toastify";

function CitiesPage() {
  const [cityData, setCityData] = useState({
    cityName: "",
    state: "",
    pincode: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/admin/addcity`,
        cityData,config
      );
      if(response.data!=null){
        toast.success("New City Added Successfully");
      }
      console.log(response.data);
      // Clear form fields after successful submission
      setCityData({
        cityName: "",
        state: "",
        pincode: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '400px', margin: '0 auto' }}>
  <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>Add City</h2>
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="cityName" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>City Name:</label>
      <input
        type="text"
        id="cityName"
        name="cityName"
        value={cityData.cityName}
        onChange={handleChange}
        required
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }}
      />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="state" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>State:</label>
      <input
        type="text"
        id="state"
        name="state"
        value={cityData.state}
        onChange={handleChange}
        required
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }}
      />
    </div>

    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="pincode" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Pincode:</label>
      <input
        type="text"
        id="pincode"
        name="pincode"
        value={cityData.pincode}
        onChange={handleChange}
        required
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }}
      />
    </div>

    <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', alignSelf: 'center', width: 'fit-content' }}>
      Add City
    </button>
  </form>
</div>


  );
}

export default CitiesPage;

// Styles

const containerStyle = {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
};

const formGroupStyle = {
  marginBottom: "15px",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const submitButtonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "10px",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
};

submitButtonStyle.hover = {
  backgroundColor: "#0056b3",
};


{/* <div style={formGroupStyle}>
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={cityData.state}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={formGroupStyle}>
              <label>Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={cityData.pincode}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div> */}