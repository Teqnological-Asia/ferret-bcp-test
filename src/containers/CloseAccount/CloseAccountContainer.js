import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CloseAccount from '../../components/CloseAccount/index';
import { loadAccountsInfoRequest } from '../../actions/profile';
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

export default connect(mapStateToProps, mapDispatchToProps)(CloseAccount);