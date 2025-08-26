import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../../navbar/Navbar";
import {Link} from "react-router-dom";

function ListAllReaders() {

    const [readers, setReaders] = useState([]);

    useEffect(() => {
        loadReaders();
    }, [])

    const loadReaders = async () => {

            const result = await axios.get("http://localhost:8080/api/worker/person",{
                auth: {
                    username: localStorage.getItem("username"),
                    password: localStorage.getItem("password")
                }
            })
            setReaders(result.data);
    }

    const deleteReader = async (id) => {

        await axios.delete(`http://localhost:8080/api/worker/person/${id}`,{
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })
        loadReaders();
    }

    return (
        <div>

            <Navbar/>

            <table className="table table-hover text-center">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>

                {
                    readers.map((reader) => (
                            <tr>
                                <td>{reader.id}</td>
                                <td>{reader.firstName}</td>
                                <td>{reader.lastName}</td>
                                <td>{reader.address}</td>
                                <td>{reader.phoneNumber}</td>
                                <td>
                                    <Link className="btn btn-outline-dark mx-1" to={`/worker/updateReader/${reader.id}`}>
                                        <i className="bi bi-file-earmark-text"/>
                                    </Link>
                                    <button className="btn btn-outline-danger mx-1" onClick={() => deleteReader(reader.id)}>
                                        <i className="bi bi-trash"/>
                                    </button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListAllReaders;