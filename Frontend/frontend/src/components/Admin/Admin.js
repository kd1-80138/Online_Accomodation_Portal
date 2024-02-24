import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/admin.css"

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") !== "true") {
      navigate("/Admin");
    }
  }, []);

  return (
    <div className="admin-panel">
  <div className="container">
    <h2 className="admin-panel-heading">Admin Panel</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-primary btn-block" onClick={() => navigate("/pendinglist")}>
              Pending Users
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-primary btn-block" onClick={() => navigate("/approveduserslist")}>
              Approved Users
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-primary btn-block" onClick={() => navigate("/alluserslist")}>
              All Users
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-primary btn-block" onClick={() => navigate("/ownerslist")}>
              Property Owners
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-primary btn-block" onClick={() => navigate("/Customerslist")}>
              Customers
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-primary btn-block" onClick={() => navigate("/propertylist")}>
              All Properties
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-primary btn-block" onClick={() => navigate("/addcity")}>
              Add City
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-primary btn-block" onClick={() => navigate("/citiesList")}>
              Cities List
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default Admin;
