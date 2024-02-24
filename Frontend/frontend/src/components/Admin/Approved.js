import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../../url';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/bg8.jpg'
import { config } from "../../Token";

function Approved() {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${BASE_URL}/admin/approved`,config)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => { });
  };



  return (
    <div >
      <div >
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1 className="text-center">All Approved Users</h1>
        <table className="table table-bordered table-light"  >
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>last Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Address</th>
              <th>Status</th>
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
                <td>{item.role}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approved;