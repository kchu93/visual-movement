import { fetchImages } from '../../actions/image_actions';
import { connect } from 'react-redux';
import Explore from './explore';

const mapStateToProps = state => ({
  images: Object.values(state.images)
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(fetchImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
