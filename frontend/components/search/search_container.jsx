import { connect } from 'react-redux';
import Search from './search';
import { fetchUser } from './actions/user_actions';
import { fetchSearchResults, clearSearchResults} from './actions/searech_actions';

const mapStateToProps = (state, ownProps) => ({
  results: state.search,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(fetchUser);
