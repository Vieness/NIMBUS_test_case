import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Users from "./components/Users";
import Pagination from "./components/Pagination";
import {Container} from "@material-ui/core";
import {Redirect, Route} from "react-router";

function App() {

    const [albums, setAlbums] = useState([])
    const [currentPage, setCurrentAlbum] = useState([1])
    const [albumsPerPage] = useState([20])

    useEffect(() => {
        const fetchAlbums = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/albums/`)
            setAlbums(res.data)
        }
        fetchAlbums()
    }, [currentPage])

    const LastAlbum = currentPage * albumsPerPage
    const FirstAlbum = LastAlbum - albumsPerPage
    const currentAlbums = albums.slice(FirstAlbum, LastAlbum)

    const paginate = (pageNumber) => setCurrentAlbum(pageNumber)

    return (
        <div className="App">
            <Redirect exact from="/" to="/albums"/>
            <Route path="/albums"
                   render={() => <Users albums={currentAlbums}/>}/>
            <Container maxWidth="sm">
                <Pagination albumsPerPage={albumsPerPage} totalAlb={albums.length} paginate={paginate}/>
            </Container>
        </div>
    );
}

export default App;
