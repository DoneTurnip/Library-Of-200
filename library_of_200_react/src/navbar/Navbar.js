import React from 'react';
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary-subtle">
            <Link className="navbar-brand px-2" to="/">
                <span className="display-6">Book of 200</span>
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mx-1">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Books
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/worker/books" style={{textDecoration: "none"}}>List all books</Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link to="/worker/createBook" style={{textDecoration: "none"}}>Create book</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className="nav-item mx-1">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Readers
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/worker/readers" style={{textDecoration: "none"}}>List all readers</Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link to="/worker/createReader" style={{textDecoration: "none"}}>Create reader</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className="nav-item mx-1">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Rentings
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/worker/rentings" style={{textDecoration: "none"}}>List all rentings</Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link to="/worker/createRenting" style={{textDecoration: "none"}}>Create renting</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;