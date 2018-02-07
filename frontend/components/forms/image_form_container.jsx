import { connect } from 'react-redux';
import { createImage } from '../../actions/image_actions';
import ImageForm from './image_form';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  createImage: image => dispatch(createImage(image))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageForm);
