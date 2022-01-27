import { connect } from 'react-redux';
import {Footer} from "@Finatext/baas-common-bcp";
const mapStateToProps = (state) => {
  return {
    currentAccount: state.profileReducer.currentAccount,
  };
};

export default connect(mapStateToProps)(Footer);