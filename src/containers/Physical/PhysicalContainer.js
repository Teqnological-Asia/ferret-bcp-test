import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Physical from '../../components/Physical';
import { loadPhysicalsRequest } from '../../actions/physical';

const mapStateToProps = (state) => {
  const physicals = state.physicalReducer.physicals.filter((item) => parseInt(item.shortable_quantity) >= parseInt(item.trade_unit));

  return {
    physicals
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPhysicalsRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Physical);