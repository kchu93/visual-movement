import { connect } from 'react-redux';
import { fetchImage } from '../../actions/image_actions';
import ImageItems from  './image_item';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
  imageId: ownProps.match.params.imageId,
  image: state.images[ownProps.match.params.imageId],
  images: Object.values(state.images)
};
};

const mapDispatchToProps = dispatch => ({
  fetchImage: id => dispatch(fetchImage(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageItems));
