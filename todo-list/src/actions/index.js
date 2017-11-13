import * as constants from './constants';
import { createAction } from '../helpers';

export const deleteItem = createAction(constants.ITEM_DELETE);
export const addItem = createAction(constants.ITEM_ADD);