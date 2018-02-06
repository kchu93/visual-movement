import { fetchUser } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { connect } from 'react-redux';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.users[ownProps.match.params.userId],
    images: Object.values(state.images)

  };



};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  createFollow: followee_id => dispatch(createFollow(followee_id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
