import React, {useState} from 'react';
import axios from "axios";
import Navbar from "../../navbar/Navbar";
import {Link, useNavigate} from "react-router-dom";

function CreateReader() {

    let navigate = useNavigate();

    const [reader, setReader] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: ""
    });

    const {firstName, lastName, address, phoneNumber} = reader;

    const onInputChange = (e) => {
        setReader({
            ...reader, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/worker/person", reader, {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })
        navigate("/worker/readers")
    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="border rounded w-75 mx-auto mt-4 p-2 shadow">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div>
                            <label htmlFor="firstName" className="form-label p-2 pt-3">
                                <strong>First name</strong>
                            </label>
                            <input type="text" className="form-control" name="firstName"
                                   placeholder="Enter the First name " value={firstName}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="form-label p-2 pt-3">
                                <strong>Last name</strong>
                            </label>
                            <input type="text" className="form-control" name="lastName"
                                   placeholder="Enter the Last name " value={lastName}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="address" className="form-label p-2 pt-3">
                                <strong>Address</strong>
                            </label>
                            <input type="text" className="form-control" name="address"
                                   placeholder="Enter the Address" value={address}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="form-label p-2 pt-3">
                                <strong>Phone number</strong>
                            </label>
                            <input type="text" className="form-control" name="phoneNumber"
                                   placeholder="Enter the Phone number" value={phoneNumber}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="text-center">
                            <button type="Submit" className="btn btn-lg btn-dark m-2">Submit</button>
                            <Link type="Cancel" className="btn btn-lg btn-danger m-2" to="/worker/readers">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateReader;