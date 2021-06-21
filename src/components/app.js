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
        let filteredMusic
        this.setState({
            inputValue: event.target.value,
            
        })
        if(event.target.value === ''){
            this.setState({
            songs: this.state.allSongs   
            })
            
        }
        else{
        console.log("Hi from onchange", event.target.value)
        filteredMusic =
        this.state.songs.filter(songs => {
            return songs.title.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })
        this.setState({
        songs: filteredMusic  
        })
        }
        
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
        
        return (
            <div>
                <Navbar/>
                <MusicTable songs={this.state.songs} />
                <SearchBar 
                songs={this.state.filteredMusic}
                musicFilterOnChange={this.musicFilterOnChange}
                inputValue={this.state.inputValue}
                handleMusicView={this.handleMusicView}/>
            </div>
                );
            }
}
export default App;
