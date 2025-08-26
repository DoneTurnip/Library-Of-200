import React, {useState} from 'react';
import Navbar from "../../navbar/Navbar";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function CreateBook() {

    let navigate = useNavigate();

    const [book, setBook] = useState({
        isbn: "",
        title: "",
        author: "",
        yearOfRelease: "",
        genre: ""
    });

    const {isbn, title, author, yearOfRelease, genre} = book;

    const onInputChange = (e) => {
        setBook({
            ...book, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/worker/book", book, {
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })
        navigate("/worker/books");
    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="border rounded w-75 mx-auto mt-4 p-2 shadow">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div>
                            <label htmlFor="isbn" className="form-label p-2 pt-3">
                                <strong>ISBN</strong>
                            </label>
                            <input type="text" className="form-control" name="isbn"
                                   placeholder="Enter the ISBN " value={isbn}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="title" className="form-label p-2 pt-3">
                                <strong>Title</strong>
                            </label>
                            <input type="text" className="form-control" name="title"
                                   placeholder="Enter the Title " value={title}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="author" className="form-label p-2 pt-3">
                                <strong>Author</strong>
                            </label>
                            <input type="text" className="form-control" name="author"
                                   placeholder="Enter the Author " value={author}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="yearOfRelease" className="form-label p-2 pt-3">
                                <strong>Year of release</strong>
                            </label>
                            <input type="text" className="form-control" name="yearOfRelease"
                                   placeholder="Enter the Year of release " value={yearOfRelease}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="genre" className="form-label p-2 pt-3">
                                <strong>Genre</strong>
                            </label>
                            <input type="text" className="form-control" name="genre"
                                   placeholder="Enter the Genre " value={genre}
                                   onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="text-center">
                            <button type="Submit" className="btn btn-lg btn-dark m-2">Submit</button>
                            <Link type="Cancel" className="btn btn-lg btn-danger m-2" to="/worker/books">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateBook;