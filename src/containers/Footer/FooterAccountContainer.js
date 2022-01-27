import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadAccountsInfoRequest } from '../../actions/profile';
import {Footer} from "@Finatext/baas-common-bcp";
const mapStateToProps = (state) => {
  return {
    currentAccount: state.profileReducer.currentAccount,
    accounts: state.profileReducer.accounts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadAccountsInfoRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);