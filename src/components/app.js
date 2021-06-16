import React, { Component } from 'react';
class App extends Component {
    constructor(props){
    super(props);
this.state = { 
    id: null,
    title: null,
    album: null,
    artist: null,
    genre: null,
    releaseDate: null

}
}
render() {
return (
<h1>Our React App Using a Component</h1>
);
}
}
export default App;
