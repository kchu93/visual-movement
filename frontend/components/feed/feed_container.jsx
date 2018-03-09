import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Feed from './feed';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
