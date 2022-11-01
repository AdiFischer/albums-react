import { useState } from "react"

export default function AddAlbum({setToggle, toggle}){ // passing a function from parent = prop
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    const [year, setYear] = useState(1970)
    const handleSubmit = (e) => {
        e.preventDefault()
        //lets check to see that they entered all data
        if(!album || !artist || !year) { // form validation
            alert('fill-up')
            return
        }
        const newAlbum = {artist, album, year}// taking 3 var and creating a new album
        fetch('https://albums-api-af.web.app/albums', { 
            method: 'POST', // try send data to get req. gives us the list
            headers: {
                'Content-Type': 'application/json' // done automatically, but here we need to tell it that we sending in json
            },
            body: JSON.stringify(newAlbum)
        })
        .then( () => {
        //assume it works... (no second .then)
        setToggle(!toggle)
        setAlbum('')
        setArtist('')
        setYear(1970)
    })
        .catch(alert)
    }

    return(
        <section className="add-album">
            <h3>Add New Album</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="album">Album:
                <input type="text" name="album" required // asking the browser to listen
                onChange={e => setAlbum(e.target.value)}
                 value={album} />
                </label> <br />
                <label htmlFor="year">Year:
                <input type="text" name="year" required
                onChange={e => setYear(e.target.value)}
                 value={year} />
                </label> <br />
                <label htmlFor="artist">Artist:
                <input type="text" name="artist" required
                onChange={e => setArtist(e.target.value)}
                 value={artist} />
                </label><br />
                <input type="submit"value='Add Album'/>
            </form>
        </section>
    )
}