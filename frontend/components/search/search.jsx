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
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillMount(){
    this.props.fetchSearchResults(this.state);
  }

  update(e){
    e.preventDefault();
    this.setState({query: e.currentTarget.value});
    if (e.target.value.length === 0) {
      this.props.fetchSearchResults();
    } else {
      this.props.fetchSearchResults(e.currentTarget.value);
    }
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

  handleBack(e){
    e.preventDefault();
    this.props.history.push(`/explore`);
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
      <div>
        <button className="back-button-box" onClick={this.handleBack}>
          <i className="fas fa-times back-button-icon"></i>
        </button>
      </div>

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
