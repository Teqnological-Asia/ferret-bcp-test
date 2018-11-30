import { connect } from 'react-redux';
import Loading from '../../components/Loading';

const mapStateToProps = (state) => {
  return {
    isLoading: state.loadingReducer.isLoading
  };
};


export default connect(mapStateToProps, null)(Loading);