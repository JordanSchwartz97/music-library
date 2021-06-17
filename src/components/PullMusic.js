import React from 'react';




PullMusic();{
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    .then(response => this.setState({
        songs: response.data
    }));
}