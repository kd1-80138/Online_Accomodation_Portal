import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../../url';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/bg8.jpg'
import {config} from '../../Token'

function Customres() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${BASE_URL}/admin/users/customers`,config)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => { });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${BASE_URL}/admin/users/delete/${id}`,config)
      .then(() => {
        fetchData(); // Fetch updated data after successful delete
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };


  return (
    <div >
      <div >
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1 className="text-center">All Customers</h1>
        <table className="table table-bordered table-light"  >
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>last Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Status</th>
              <td> Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} >
                <td>{item.id}</td>
                <td> {item.firstName} </td>
                <td>{item.lastName}</td>
                <td> {item.email} </td>
                <td>{item.mobileNo}</td>
                <td> {item.gender}</td>
                <td >{item.address}</td>
                <td>{item.status}</td>
                <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customres;