import { fetchUser, createFollow, deleteFollow } from '../../actions/user_actions';
import { connect } from 'react-redux';
import LikesTab from './likes_tab';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.users[ownProps.match.params.userId],
    likes: Object.values(state.likes),
    follows: state.follows.follows,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesTab));
