import { connect } from 'react-redux';
import { createConnector } from '../../helpers';
import { deleteItem } from '../../actions';

const mapDispatchToProps = {
    deleteItem
}

export const itemConnector = component => (
    connect(null, mapDispatchToProps)(component)
);