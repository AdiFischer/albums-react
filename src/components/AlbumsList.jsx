import { useState, useEffect } from "react";
import AlbumCard from './AlbumCard'

export default function AlbumList({toggle}) {
    const [albums, setAlbums] = useState()// when we get the list we have somewhere to put it
    useEffect(() => {
        fetch('https://albums-api-af.web.app/albums')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)
    }, [toggle])// []run once. run when a change made
    return(// do the return first and then the new data will come up 
        <main className="album-list">
            {!albums
            ? <p>Loading...</p>
            : albums.map(thisAlbum => <AlbumCard key={thisAlbum.album.id} thisAlbum ={thisAlbum} />)
               
        }
        </main>
    )
}