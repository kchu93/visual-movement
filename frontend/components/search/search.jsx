import React from 'react';
import { Link, NavLink } from 'react-router-dom';



class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ""
    };

    this.firstSearch = true;
  }

  clearSearch() {
    if (this.firstSearch){
      this.firstSearch = false;
      this.setState({query: ""});
    }
    this.props.history.push("/search");
  }

  update(e){
    e.preventDefault();
    this.setState({query: e.currentTarget.value});
    if (e.target.value !== ""){
      this.props.fetchResults(e.currentTarget.value);
    } else {
      this.props.clearResults();
    }
  }


  render () {

  }
}

export default Search;
