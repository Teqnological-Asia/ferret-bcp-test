import { connect } from 'react-redux';
import Header from '../components/Authenticated/Header';

const mapStateToProps = (state) => {
  return {
    currentPathName: state.routing.location.pathname
  };
};

export default connect(mapStateToProps)(Header);