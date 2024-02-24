import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BASE_URL } from "../url";

const PropertiesChange = () => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${BASE_URL}/properties`)
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
      .put(`${BASE_URL}/admin/property/update`, editedProperty)
      .then(() => {

        fetchData();
      })
      .catch((error) => {});
  };



  return (
    <div className="unique" >
    <div className="container mt-5">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center">Property Listings</h1>
      <table className="table tabl<Route path='/properties' element={<PropertiesList/>} />e-bordered table-striped">
        <thead className="thead-dark">

          <tr>
            <th>ID</th>
            <th>Address</th>
            <th>Description</th>
            <th>Gender</th>
            <th>Name</th>
            <th>Clean Rating</th>
            <th>Food Rating</th>
            <th>Safety Rating</th>
            <th>Rent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} >
              <td>{item.id}</td>
              <td style={{width:"40px"}}>
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
                    value={item.description}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, description: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.description
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"100px"}}
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
                  <input style={{width:"180px"}}
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, name: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"50px"}}
                    type="text"
                    value={item.ratingClean}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, ratingClean: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.ratingClean
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"50px"}}
                    type="text"
                    value={item.ratingFood}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, ratingFood: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.ratingFood
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"50px"}}
                    type="text"
                    value={item.ratingSafety}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, ratingSafety: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.ratingSafety
                )}
              </td>
              <td>
                {isEditing === item.id ? (
                  <input style={{width:"75px"}}
                    type="text"
                    value={item.rent}
                    onChange={(e) =>
                      setData((prevProperties) =>
                        prevProperties.map((prevProperty) =>
                          prevProperty.id === item.id
                            ? { ...prevProperty, rent: e.target.value }
                            : prevProperty
                        )
                      )
                    }
                  />
                ) : (
                  item.rent
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

export default PropertiesChange;
















