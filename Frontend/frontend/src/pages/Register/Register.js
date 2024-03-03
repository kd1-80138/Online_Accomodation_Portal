import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import {BASE_URL} from "../../url";

const Register = () => {
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const registerPerson = async () => {
    try {
      if (!firstName) {
        toast.warning("Please enter first name");
        return;
      }
      if (!mobileNo) {
        toast.warning("Please enter phone number");
        return;
      }
      if (!email) {
        toast.warning("Please enter email");
        return;
      }
      if (!password) {
        toast.warning("Please enter password");
        return;
      }

      const body = {
        address,
        firstName,
        lastName,
        mobileNo,
        gender,
        email,
        password,
        role,
      };

      const response = await axios.post(`${BASE_URL}/users/signup`, body);

      if (response.status === 201) {
        toast.success("Successfully signed up new user");
        navigate("/signin");
      } else {
        toast.error(response.data.error || "An error occurred");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("An error occurred while registering user");
    }
  };

  return (
    <div className="regisimage">
      <br></br>
      <br/><br/><br/><br/><br/><br/>
      <div className="container col-8 col-xl-6 my-4 pt-2 pb-5 shadow bg-body rounded">
        <h4 className="heading">Register</h4>
        <div className="row mx-auto g-4">
          <div className="col-md-6">
            <label htmlFor="inputfirst_name4" className="form-label">
              First Name*
            </label>
            <input
              onChange={(e) => { setFirstName(e.target.value); }}
              type="text"
              className="form-control"
              id="inputfirst_name4"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputlast_name4" className="form-label">
              Last Name*
            </label>
            <input
              onChange={(e) => { setLastName(e.target.value); }}
              type="text"
              className="form-control"
              id="inputlast_name4"
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress4" className="form-label">
              Address
            </label>
            <input
              onChange={(e) => { setAddress(e.target.value); }}
              type="text"
              className="form-control"
              id="inputAddress4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email*
            </label>
            <input
              onChange={(e) => { setEmail(e.target.value); }}
              type="email"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone4" className="form-label">
              Phone*
            </label>
            <input
              onChange={(e) => { setMobileNo(e.target.value); }}
              type="number"
              min={0}
              className="form-control"
              id="inputPhone4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password*
            </label>
            <input
              onChange={(e) => { setPassword(e.target.value); }}
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="male" className="form-label">
              Gender
            </label>
            <br />
            <br />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
            <input
              onChange={(e) => { setGender(e.target.value); }}
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="MALE"
            />
            <label htmlFor="Female" className="form-check-label">
              Female
            </label>
            <input
              onChange={(e) => { setGender(e.target.value); }}
              className="form-check-input"
              type="radio"
              name="gender"
              id="Female"
              value="FEMALE"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="role" className="form-label">
              User Role*
            </label>
            <select
              onChange={(e) => { setRole(e.target.value); }}
              value={role}
              className="form-select"
              id="role"
              placeholder="Select User Role"
            >
              <option value="Select">Select</option>
              <option value="ROLE_OWNER">Owner</option>
              <option value="ROLE_CUSTOMER">Customer</option>
            </select>
          </div>
          <div className="col d-flex justify-content-md-center">
            <button
              onClick={registerPerson}
              className="btn col-6 btn-outline-dark"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Register;
