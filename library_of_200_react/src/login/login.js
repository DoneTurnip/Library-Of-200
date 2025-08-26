import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
    let navigate = useNavigate();

    let username = "";
    let password = "";

    const onInputChange = (e) => {
        username = e.target.value;
        password = e.target.value;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        try {
            await axios.get("http://localhost:8080/api/worker/book", {
                auth: {
                    username: localStorage.getItem("username"),
                    password: localStorage.getItem("password")
                }
            })
            navigate("/worker/books");
        }
        catch (error) {
            window.alert("Bad credentials");
        }
    }

    return (
        <div className="container">
            <div className="border rounded w-50 mx-auto mt-4 p-2 shadow text-center">
                <p className="display-5">Login</p>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div>
                        <label htmlFor="username" className="form-label p-2 pt-3">
                            <strong>Username</strong>
                        </label>
                        <input type="text" className="form-control" name="username"
                               placeholder="Enter the username "
                               onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label p-2 pt-3">
                            <strong>Password</strong>
                        </label>
                        <input type="password" className="form-control" name="password"
                               placeholder="Enter the Title "
                               onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div className="text-center">
                        <button type="Submit" className="btn btn-lg btn-dark m-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;