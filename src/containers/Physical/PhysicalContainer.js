import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Physical from '../../components/Physical';
import { loadPhysicalsRequest, createOrderSuccess } from '../../actions/physical';

const mapStateToProps = (state) => {
  return {
    physicals: state.physicalReducer.physicals
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPhysicalsRequest,
    createOrderSuccess
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Physical);