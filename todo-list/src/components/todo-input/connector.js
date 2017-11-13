import { connect } from 'react-redux';
import { createConnector } from '../../helpers';
import { addItem } from '../../actions';

const mapDispatchToProps = {
    addItem
}

export const itemConnector = component => (
    connect(null, mapDispatchToProps)(component)
);