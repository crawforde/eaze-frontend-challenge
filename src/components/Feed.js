import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifList: []
    };
  }

  componentDidMount(){
    this.loadGifs();
  }

  componentWillReceiveProps(newProps){
    this.props = newProps;
    this.loadGifs();
  }

  loadGifs(){
    var requestUrl = 'http://api.giphy.com/v1/gifs/';
    requestUrl += (this.props.searchTerm ? `search?q=${this.props.searchTerm}&` : 'trending?');
    requestUrl += `api_key=${process.env.REACT_APP_API_KEY}&limit=20`;
    axios.get(requestUrl)
    .then((resp)=>{
      this.setState({
        gifList: resp.data.data
      });
    })
    .catch((error)=>{
      console.log('Error loading gifs.');
    });
  }

  render() {
    return (
      <div className="Feed">
        {this.state.gifList.map((gif, index)=>(
          <div key={index}><img src={gif.images.original.url} alt=""/></div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
    searchTerm: state
});

var mapDispatchToProps = (dispatch)=>({
});

Feed = connect(mapStateToProps,mapDispatchToProps)(Feed);


export default Feed;
