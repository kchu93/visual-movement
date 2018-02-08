import { connect } from 'react-redux';
import { createImage } from '../../actions/image_actions';
import { clearErrors } from '../../actions/user_actions';
import ImageForm from './image_form';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.user
});


const mapDispatchToProps = dispatch => ({
  createImage: image => dispatch(createImage(image)),
  clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageForm);
