import React from 'react';
import { Link, NavLink } from 'react-router-dom';



class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ""
    };
    this.update = this.update.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount(){
    this.props.fetchSearchResults(this.state);
  }

  update(e){
    e.preventDefault();
    this.setState({query: e.currentTarget.value});
    this.props.fetchSearchResults(e.currentTarget.value);
  }


  handleKeyPress(e){
    if (e.key === 'Enter'){
      if (this.state.query === ""){
        this.props.clearSearchResults();
      } else {
      this.props.fetchSearchResults(e.target.value);
      }
    }
  }


  render () {
    let test;
    if (!this.props.search.users) {
      test = (
        <h1>No Results Found</h1>
      );
    } else {
      test = (
        <div>
          {Object.values(this.props.search.users).map(user => (
            <div>
              <p className="search-result-username">{user.username}</p>
              <Link
                to={`/users/${user.id}`}>

                <img src={user.profile_picture} />
              </Link>
            </div>
          ))
        }
        </div>
      );
    }

    return (

    <div className="search-input-container">
        <div className="search-input-box-container">
            <input
              className="search-input-box"
              type="text"
              placeholder="Update description"
              value={this.state.query}
              onChange={this.update}
              onKeyPress={this.handleKeyPress}
            />
        </div>

        <div className="search-results-container">
          {test}
        </div>
    </div>
  );
  }
}

export default Search;