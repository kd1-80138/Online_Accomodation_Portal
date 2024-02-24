import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../../url';
import {config} from '../../Token'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/bg8.jpg'
function Pending() {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // const token = sessionStorage.getItem('jwt'); // Retrieve JWT token from session storage
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}` // Include JWT token in the request headers
  //   }
  // };

  const fetchData = () => {
    axios
      .get(`${BASE_URL}/admin/pending`,config)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => { });
  };

  const handleEdit = (propertyId) => {
    setIsEditing(propertyId);
  };

  const handleSave = (editedUser) => {
    axios
      .put(`${BASE_URL}/admin/role/approved`, editedUser,config)
      .then(() => {
        fetchData();
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

        <h1 className="text-center">Pending Users List</h1>
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
              <th>Role</th>
              <th>Status</th>
              <th> Action</th>
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


                <td>
                  {isEditing === item.id ? (
                    <input style={{ width: "100px" }}
                      type="text"
                      value={item.role}
                      onChange={(e) =>
                        setData((prevProperties) =>
                          prevProperties.map((prevProperty) =>
                            prevProperty.id === item.id
                              ? { ...prevProperty, role: e.target.value }
                              : prevProperty
                          )
                        )
                      }
                    />
                  ) : (
                      item.role
                    )}
                </td>

                <td>
                  {isEditing === item.id ? (
                    <input style={{ width: "100px" }}
                      type="text"
                      value={item.status}
                      onChange={(e) =>
                        setData((prevProperties) =>
                          prevProperties.map((prevProperty) =>
                            prevProperty.id === item.id
                              ? { ...prevProperty, status: e.target.value }
                              : prevProperty
                          )
                        )
                      }
                    />
                  ) : (
                      item.status
                    )}
                </td>

                <td>
                  {isEditing === item.id ? (
                    <>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleSave(item)}
                      >
                        Update
                    </button>
                      {/* <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setIsEditing(null)}
                    >
                      Cancel
                    </button> */}
                    </>
                  ) : (
                      <>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                    </button>
                        {/* <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button> */}
                      </>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pending;