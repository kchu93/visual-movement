import { connect } from 'react-redux';
import { createImage, clearImageErrors } from '../../actions/image_actions';
import ImageForm from './image_form';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.images
});


const mapDispatchToProps = dispatch => ({
  createImage: (image, callback) => dispatch(createImage(image, callback)),
  clearImageErrors: () => dispatch(clearImageErrors())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageForm);
