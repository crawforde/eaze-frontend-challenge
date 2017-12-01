import React, { Component } from 'react';
import { search } from '../actions/index';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  changeBar(newValue){
    this.setState({
      searchTerm: newValue
    });
  }

  search(){
    var newSearchTerm = this.state.searchTerm;
    this.setState({
      searchTerm: ''
    },()=>{
      this.props.search(newSearchTerm);
    });
  }

  render() {
    return (
      <div className='SearchBar'>
        <input value={this.state.searchTerm} onChange={(evt)=>this.changeBar(evt.target.value)}/>
        <button onClick={()=>this.search()}>Search</button>
      </div>
    );
  }
}

const mapStateToProps = ()=>({
});

var mapDispatchToProps = (dispatch)=>({
  search: (newSearchTerm)=>{
    dispatch(search(newSearchTerm));
  }
});

SearchBar = connect(mapStateToProps,mapDispatchToProps)(SearchBar);

export default SearchBar
