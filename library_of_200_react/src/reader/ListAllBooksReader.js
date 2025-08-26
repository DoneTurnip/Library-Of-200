import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function ListAllBooksReader() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    },[])

    const loadBooks = async () => {
        const result = await axios.get("http://localhost:8080/api/all/book")
        setBooks(result.data);
    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-secondary-subtle">
                <Link className="navbar-brand px-2" to="/">
                    <span className="display-6">Book of 200</span>
                </Link>
            </nav>

            <table className="table table-hover text-center">
                <thead>
                <tr>
                    <th scope="col">ISBN</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Year of release</th>
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
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListAllBooksReader;