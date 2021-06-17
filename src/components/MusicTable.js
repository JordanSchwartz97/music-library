import React from 'react'

function MusicTable(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>Title:</th>
                    <th>Album:</th>
                    <th>Artist:</th>
                    <th>Genre:</th>
                    <th>Release Date:</th>
                </tr>
            </table>
            {props.songs.map((item) => {
                return(
            <table>
                <tr>
                    <td>{item.title},</td>
                    <td>{item.album},</td>
                    <td>{item.artist},</td>
                    <td>{item.genre},</td>
                    <td>{item.releaseDate}</td>
                    
                </tr>
                <br></br>
            </table>
            )})}
        </div>
        )
}

export default MusicTable
