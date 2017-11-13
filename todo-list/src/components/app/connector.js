import { connect } from 'react-redux';
import deleteItem from '../../actions';

const mapStateToProps = state => ({
    list: state.todos
});

export const appConnector = component => connect(mapStateToProps)(component);
