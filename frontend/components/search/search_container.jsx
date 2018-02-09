import { connect } from 'react-redux';
import Search from './search';
import { fetchUser } from '../../actions/user_actions';
import { fetchSearchResults, clearSearchResults} from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchSearchResults: query => dispatch(fetchSearchResults(query)),
  clearSearchResults: () => dispatch(clearSearchResults())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
