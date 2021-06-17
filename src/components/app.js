import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable';
import Navbar from './Navbar';
import './app.css'

class App extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        { 
            songs: []
        }
    }
    componentDidMount(){
        this.getAllSongs();
        
    }
    async getAllSongs(){
        await axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res =>{
          this.setState({
            songs: res.data
        });  
        console.log(this.state.songs)
        });
        
        
        
    }
    render() {
        return (
            <div>
                <Navbar/>
                <MusicTable songs={this.state.songs} />
                
            </div>
                );
            }
}
export default App;