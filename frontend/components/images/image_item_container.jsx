import { connect } from 'react-redux';
import { fetchImage } from '../../actions/image_actions';
import ImageItems from  './image_item';
import { withRouter } from 'react-router-dom';
import { createLike, deleteLike } from '../../actions/like_action';

const mapStateToProps = (state, ownProps) => {
  let currentImage = state.images[ownProps.match.params.imageId];
  let user;
  if (currentImage){
    user = state.users[currentImage.author_id];
  } else {
    user = null;
  }
  return {
  imageId: ownProps.match.params.imageId,
  image: state.images[ownProps.match.params.imageId],
  images: Object.values(state.images),
  user: user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchImage: id => dispatch(fetchImage(id)),
  createLike: id => dispatch(createLike(id)),
  deleteLike: id => dispatch(deleteLike(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageItems));
