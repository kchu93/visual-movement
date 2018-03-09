import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Feed from './feed';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  following_images: Object.values(state.following_images)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
