import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadAccountsInfoRequest } from '../../actions/profile';
import ContainerCloseAccount from "../../components/CloseAccount/ContainerCloseAccount";

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

export default connect(mapStateToProps, mapDispatchToProps)(ContainerCloseAccount);