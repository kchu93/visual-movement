import { connect } from 'react-redux';
import { updateImage, deleteImage, fetchImage } from '../../actions/image_actions';
import ImageEdit from './image_edit';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  image: state.images[ownProps.match.params.imageId],
  imageId: parseInt(ownProps.match.params.imageId)
});


const mapDispatchToProps = dispatch => ({
  fetchImage: image => dispatch(fetchImage(image)),
  updateImage: image => dispatch(updateImage(image)),
  deleteImage: image => dispatch(deleteImage(image))
});



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageEdit));
