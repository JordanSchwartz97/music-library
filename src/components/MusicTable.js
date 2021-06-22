import React from 'react'
import './MusicTable.css'
function MusicTable(props) {
    return (
        <div>
            <table>
                <tr>
                    <th id="title" className="title">Title</th>
                    <th id="album" className="album">Album</th>
                    <th id="artist" className="artist">Artist</th>
                    <th id="genre" className="genre">Genre</th>
                    <th id="releaseDate" className="date">Release Date</th>
                </tr>
            </table>
            {props.songs.map((item) => {
                return(
            <table>
                <tr>
                    <td id="title" className="title">{item.title}</td>
                    <td id="album" className="album">{item.album}</td>
                    <td  id="artist" className="artist">{item.artist}</td>
                    <td  id="genre" className="genre">{item.genre}</td>
                    <td  id="releaseDate" lassName="date">{item.releaseDate}</td>
                    
                </tr>
                <br></br>
            </table>
            )})}
        </div>
        )
}

export default MusicTable
