import React from 'react'
import './MusicTable.css'
function MusicTable(props) {
    return (
        <div>
            <table>
                <tr>
                    <th className="title">Title:</th>
                    <th className="album">Album:</th>
                    <th className="artist">Artist:</th>
                    <th className="genre">Genre:</th>
                    <th className="date">Release Date:</th>
                </tr>
            </table>
            {props.songs.map((item) => {
                return(
            <table>
                <tr>
                    <td className="title">{item.title},</td>
                    <td className="album">{item.album},</td>
                    <td className="artist">{item.artist},</td>
                    <td className="genre">{item.genre},</td>
                    <td className="date">{item.releaseDate}</td>
                    
                </tr>
                <br></br>
            </table>
            )})}
        </div>
        )
}

export default MusicTable
