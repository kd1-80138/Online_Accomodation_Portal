import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/admin.css"

function User() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid mt-5">
    <div className="row" style={{ marginLeft: '200px', marginRight: '200px' }}>
      <div className="col-md-4" style={{ marginTop: '50px' }}>
        <div className="card mb-4" >
          <div className="card-body text-center" style={{ backgroundColor: 'pink' }}>
            {/* <h3 className="card-title">Pending Users</h3> */}
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/addreview")}>
              Add Review
            </button>
          </div>
        </div>
      </div>
  
      <div className="col-md-4" style={{ marginTop: '50px' }}>
        <div className="card mb-4" >
          <div className="card-body text-center" style={{ backgroundColor: 'pink' }}>
            {/* <h3 className="card-title">Approved Users List</h3> */}
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/all_propr_review")}>
               Show all Reviews Of Property
            </button>
          </div>
        </div>
      </div>
  
      <div className="col-md-4" style={{ marginTop: '50px' }}>
        <div className="card mb-4" >
          <div className="card-body text-center" style={{ backgroundColor: 'pink' }}>
            {/* <h3 className="card-title">All Users</h3> */}
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/all_review_by_userid")}>
              Show Your Reviews 
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default User;
