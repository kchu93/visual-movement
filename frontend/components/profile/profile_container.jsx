import { fetchUser, createFollow, deleteFollow } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.users[ownProps.match.params.userId],
    images: Object.values(state.images),
    follows: state.follows.follows
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: followee_id => dispatch(createFollow(followee_id)),
  deleteFollow: followee_id => dispatch(deleteFollow(followee_id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
