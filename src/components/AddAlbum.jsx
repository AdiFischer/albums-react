import { useState } from "react"

export default function AddAlbum({setToggle, toggle}){// passing a func from parent = prop
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    const [year, setYear] = useState(1970)
    const handleSubmit = (e) => {
        e.preventDefault()
        //lets check to see that they entered all data
        if(!album || !artist || !year) {
            alert('fill-up')
            return
        }
        const newAlbum = {artist, album, year}
        fetch('https://albums-api-af.web.app/albums', {
            method: 'POST',
            headers: {
                'Contact-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)
        })
        .then( () => {
        //assume it works... (no .second then)
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
                <input type="text" name="album" required
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