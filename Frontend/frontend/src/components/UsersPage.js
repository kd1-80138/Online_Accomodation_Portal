import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../url';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/bg8.jpg'
function UsersPage() {
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(null);

    useEffect(() => {
        fetchData();
      }, []);

   
      const fetchData = () => {
        axios
          .get(`${BASE_URL}/admin/user`)
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          })
          .catch((error) => {});
      };

      const handleEdit = (propertyId) => {
        setIsEditing(propertyId);
      };
    
      const handleSave = (editedProperty) => {
        axios
          .put(`${BASE_URL}/users/edit`, editedProperty)
          .then(() => {
    
            fetchData();
          })
          .catch((error) => {});
      };

  return (
    <div >
    <div >
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1 className="text-center">Users Management</h1>
      <table className="table table-bordered table-light"  >
        <thead className="thead-dark">
            <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} >
              <td>{item.id}</td>
              <td style={{width:"10px"}}>
                {isEditing === item.id ? (
                  <input style={{width:"85px"}}
                    type="text"
                    value={item.address}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, address: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.address
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"180px"}}
                    type="text"
                    value={item.email}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, email: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"230px"}}
                    type="text"
                    value={item.fullName}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, fullName: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.fullName
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"150px"}}
                    type="text"
                    value={item.gender}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, gender: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.gender
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"200px"}}
                    type="text"
                    value={item.mobNo}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, mobNo: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.mobNo
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"150px"}}
                    type="text"
                    value={item.password}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, password: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.password
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"100px"}}
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

export default UsersPage;

