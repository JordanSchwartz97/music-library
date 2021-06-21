import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable';
import Navbar from './Navbar';
import './app.css'
import SearchBar from './Searchbar';

class App extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        { 
            inputValue: '',
            songs: [],
            allSongs: [],
            sortValue: '',
        }
    }
    
    componentDidMount(){
        this.getAllSongs();
        
        
    } 
    musicFilterOnChange = (event) => {
        this.setState({
            inputValue: event.target.value, 
        })
        
    }
    async getAllSongs(){
        await axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res =>{
          this.setState({
            songs: res.data, 
            allSongs: res.data
        });
        })
        }
    render() {
        let filteredMusic = this.state.songs.filter (songs => {
            return (songs.title.toLowerCase().includes(this.state.inputValue.toLowerCase())|| 
            songs.album.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
            songs.artist.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
            songs.genre.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
            songs.releaseDate.toLowerCase().includes(this.state.inputValue.toLowerCase())
            )
        })
        return (
            <div>
                <Navbar/>
                <SearchBar 
                musicFilterOnChange={(event)=>this.musicFilterOnChange(event)}
              />
                <MusicTable songs={filteredMusic} />             
            </div>
                );
            }
}
export default App;
