import React from 'react';
import { itemConnector } from './connector'

export const Item = ({ id, name, desc, deleteItem }) => (
    <li key={ id }>
        <strong>{ name }</strong>
        <div>{ desc }</div>
        <button onClick={ () => deleteItem(id) }>X</button>
    </li>)

export const TodoItem = itemConnector(Item);