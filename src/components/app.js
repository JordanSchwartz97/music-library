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
            sortValue: '',
            isMusicViewOn: false,
        }
    }
    
    componentDidMount(){
        this.getAllSongs();
        
        
    } 
    musicFilterOnChange = (event) => {
        console.log("Hi from onchange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }
    async getAllSongs(){
        await axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res =>{
          this.setState({
            songs: res.data  
        });
        })
        }
    render() {
        const filteredMusic =
        this.state.songs.filter(songs => {
            return songs.title.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })
        return (
            <div>
                <Navbar/>
                <MusicTable songs={this.state.songs} />
                <SearchBar 
                songs={filteredMusic}
                musicFilterOnChange={this.musicFilterOnChange}
                inputValue={this.state.inputValue}
                handleMusicView={this.handleMusicView}/>   
            </div>
                );
            }
}
export default App;
