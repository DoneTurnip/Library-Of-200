import React, {useState} from 'react';
import axios from "axios";
import Navbar from "../../navbar/Navbar";
import {Link, useNavigate} from "react-router-dom";

function CreateRenting() {

    let navigate = useNavigate();

    const [renting, setRenting] = useState({
        personId: "",
        bookId: "",
        startOfRenting: ""
    });

    const {personId, bookId, startOfRenting} = renting;

    const [rentingResponse] = useState({
        person: "",
        book: "",
        startOfRenting: ""
    })

    const onInputChange = (e) => {
        setRenting({
            ...renting, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const getBook = await axios.get(`http://localhost:8080/api/worker/book/${bookId}`, {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })

        const getReader = await axios.get(`http://localhost:8080/api/worker/person/${personId}`, {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })

        rentingResponse.startOfRenting = startOfRenting;
        rentingResponse.book = getBook.data;
        rentingResponse.person=getReader.data;
        await axios.post("http://localhost:8080/api/worker/renting", rentingResponse, {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })
        navigate("/worker/rentings")
    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="border rounded w-75 mx-auto mt-4 p-2 shadow">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div>
                            <label htmlFor="person.id" className="form-label p-2 pt-3">
                                <strong>Person ID</strong>
                            </label>
                            <input type="text" className="form-control" name="personId"
                                   placeholder="Enter the Person ID" value={personId}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="bookId" className="form-label p-2 pt-3">
                                <strong>Book ID</strong>
                            </label>
                            <input type="text" className="form-control" name="bookId"
                                   placeholder="Enter the Book ID " value={bookId}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="startOfRenting" className="form-label p-2 pt-3">
                                <strong>Beginning of renting</strong>
                            </label>
                            <input type="text" className="form-control" name="startOfRenting"
                                   placeholder="Enter the Beginning of the renting" value={startOfRenting}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="text-center">
                            <button type="Submit" className="btn btn-lg btn-dark m-2">Submit</button>
                            <Link type="Cancel" className="btn btn-lg btn-danger m-2"
                                  to="/worker/rentings">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateRenting;