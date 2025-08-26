import React, {useEffect, useState} from 'react';
import axios from "axios";
import Navbar from "../../navbar/Navbar";

function ListAllRentings() {
    const [rentings, setRentings] = useState([]);

    useEffect(() => {
        loadRentings();
    }, [])

    const loadRentings = async () => {

        const result = await axios.get("http://localhost:8080/api/worker/renting",{
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })
        setRentings(result.data);
    }

    const deleteRenting = async (id) => {

        await axios.delete(`http://localhost:8080/api/worker/renting/${id}`,{
            auth: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password")
            }
        })
        await loadRentings();
    }

    return (
        <div>
            <Navbar/>

            <table className="table table-hover text-center">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Renter's name</th>
                    <th scope="col">Book's ISBN and title</th>
                    <th scope="col">Beginning of renting</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>

                {
                    rentings.map((renting) => (
                            <tr>
                                <td>{renting.rentingCode}</td>
                                <td>{renting.person.firstName} {renting.person.lastName}</td>
                                <td>{renting.book.isbn} | {renting.book.title}</td>
                                <td>{renting.startOfRenting}</td>
                                <td>
                                    <button className="btn btn-outline-danger mx-1" onClick={() => deleteRenting(renting.rentingCode)}>
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

export default ListAllRentings;