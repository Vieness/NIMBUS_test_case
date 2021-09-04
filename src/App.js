import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Users from "./components/Users";
import Pagination from "./components/Pagination";
import {Container} from "@material-ui/core";

function App() {

    const [albums, setAlbums] = useState([])
    const [currentPage, setCurrentAlbum] = useState([1])
    const [albumsPerPage] = useState([20])

    useEffect(() => {
        const fetchAlbums = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
            setAlbums(res.data)

        }
        fetchAlbums()
    }, [])
    console.log(albums);

    const LastAlbum = currentPage * albumsPerPage
    const FirstAlbum = LastAlbum - albumsPerPage
    const currentAlbums = albums.slice(FirstAlbum, LastAlbum)

    const paginate = (pageNumber) => setCurrentAlbum(pageNumber)

    return (
        <div className="App">
            <Container maxWidth="sm">
                <Users albums={currentAlbums}/>
                <Pagination albumsPerPage={albumsPerPage} totalAlb={albums.length} paginate={paginate}/>
            </Container>
        </div>
    );
}

export default App;
