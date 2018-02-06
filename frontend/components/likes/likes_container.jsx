import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/like_action';
import Likes from  './likes';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
  image: state.images[ownProps.match.params.imageId],
  currentUser: state.session.currentUser,
  imageId: ownProps.match.params.imageId
});

const mapDispatchToProps = dispatch => ({
  createLike: id => dispatch(createLike(id)),
  deleteLike: id => dispatch(deleteLike(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes));
