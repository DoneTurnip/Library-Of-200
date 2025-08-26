import React from 'react';
import booksLeft from "../assets/booksLeft.jpg";
import booksRight from "../assets/booksRight.jpg";
import {Link} from "react-router-dom";
function Home() {
    return (
        <div>
            <div className="container d-flex align-items-center">
                <div className="h-25">
                    <img className="img-fluid" src={booksLeft} alt="kep"/>
                </div>

                <div className="card w-50 bg-light text-center mx-auto my-5 shadow">
                    <div className="card-body">
                        <p className="card-title display-1">Library of 200</p>
                        <p className="card-text text-muted display-6">The best books you need!</p>
                        <div className="mt-5">
                            <Link className="btn btn-dark text-white btn-lg m-2" to="/reader/books">
                                I am a reader
                            </Link>
                            <Link className="btn btn-secondary btn-lg m-2" to="/login">
                                I am a worker
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-25">
                    <img className="img-fluid" src={booksRight} alt="kep"/>
                </div>
            </div>
        </div>
    );
}

export default Home;