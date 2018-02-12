import { connect } from 'react-redux';
import { createNewUser, clearErrors, login } from '../../actions/session_actions';
import Signup from './signup';


const mapStateToProps = state => ({
  errors: state.errors.session
});


const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
