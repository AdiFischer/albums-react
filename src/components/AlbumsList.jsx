import { useState, useEffect } from "react";
import AlbumCard from './AlbumCard'

export default function AlbumList() {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        fetch('https://albums-api-af.web.app/albums')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)
    }, [])
    return(
        <main className="album-list">
            {!albums
            ? <p>Loading...</p>
            : albums.map(thisAlbum => <AlbumCard key={thisAlbum.album.id} thisAlbum ={thisAlbum} />)
               
        }
        </main>
    )
}