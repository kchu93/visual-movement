import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Profile from './profile';
import { withRouter } from 'react-router-dom';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  user: state.users[ownProps.match.params.userId],
  images: Object.values(state.images),

});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
