import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BASE_URL } from '../url';

const CitiesChange = () => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${BASE_URL}/cities`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  };

  const handleEdit = (propertyId) => {
    setIsEditing(propertyId);
  };

  const handleSave = (editedProperty) => {
    axios
      .put(`${BASE_URL}/admin/cities/edit`, editedProperty)
      .then(() => {
        fetchData();
      })
      .catch((error) => {});
  };

  const handleDelete = () => {
    axios
      .delete(`${BASE_URL}/admin/cities/delete/6`)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  // const containerStyle ={
  //   backgroundImage: "/pg.webp"
  // }

  return (
    <div className="unique" >
    <div className="container mt-5">
      <br></br>
      <br></br>
      <h1 className="text-center"> Cities Listings</h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} >
              <td>{item.id}</td>
              <td style={{width:"270px"}}>
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
                  <>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleSave(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setIsEditing(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button> 

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
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

export default CitiesChange;