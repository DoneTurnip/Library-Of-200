import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Home from "./home/Home";
import ListAllBooksReader from "./reader/ListAllBooksReader";
import ListAllBooksWorker from "./worker/book/ListAllBooksWorker";
import ListAllReaders from "./worker/reader/ListAllReaders";
import ListAllRentings from "./worker/renting/ListAllRentings";
import CreateRenting from "./worker/renting/CreateRenting";
import CreateBook from "./worker/book/CreateBook";
import CreateReader from "./worker/reader/CreateReader";
import UpdateReader from "./worker/reader/UpdateReader";
import UpdateBook from "./worker/book/UpdateBook";
import Login from "./login/login";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/home" element={<Home />}/>
                    <Route exact path="/login" element={<Login />}/>
                    <Route exact path="/reader/books" element={<ListAllBooksReader />} />
                    <Route exact path="/worker/books" element={<ListAllBooksWorker />} />
                    <Route exact path="/worker/createBook" element={<CreateBook />} />
                    <Route exact path="/worker/updateBook/:id" element={<UpdateBook />} />
                    <Route exact path="/worker/readers" element={<ListAllReaders />} />
                    <Route exact path="/worker/createReader" element={<CreateReader />} />
                    <Route exact path="/worker/updateReader/:id" element={<UpdateReader />} />
                    <Route exact path="/worker/rentings" element={<ListAllRentings />} />
                    <Route exact path="/worker/createRenting" element={<CreateRenting />} />

                </Routes>
            </Router>
        </div>
    );
}

export default App;
