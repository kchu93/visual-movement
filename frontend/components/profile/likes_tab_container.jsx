import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import LikesTab from './likes_tab';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.users[ownProps.match.params.userId],
    likes: Object.values(state.likes)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesTab));
