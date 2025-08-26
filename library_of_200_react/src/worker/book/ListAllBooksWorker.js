import React, {useEffect, useState} from 'react';
import Navbar from "../../navbar/Navbar";
import axios from "axios";
import {Link} from "react-router-dom";

function ListAllBooksWorker() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    },[])

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/api/worker/book",{
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })
        setBooks(result.data);
    }

    const deleteBook = async (id) => {

        await axios.delete(`http://localhost:8080/api/worker/book/${id}`,{
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })
        await loadBooks();
    }

    return (
        <div>

            <Navbar />

            <table className="table table-hover text-center">
                <thead>
                <tr>
                    <th scope="col">ISBN</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Year of release</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>

                {
                    books.map((book) => (
                        <tr>
                            <td>{book.isbn}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.yearOfRelease}</td>
                            <td>
                                <Link className="btn btn-outline-dark mx-1" to={`/worker/updateBook/${book.isbn}`}>
                                    <i className="bi bi-file-earmark-text"/>
                                </Link>
                                <button className="btn btn-outline-danger mx-1" onClick={() => deleteBook(book.isbn)} to={""}>
                                    <i className="bi bi-trash"/>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListAllBooksWorker;