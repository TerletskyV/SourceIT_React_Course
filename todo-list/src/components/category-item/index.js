import React from 'react';
import './index.css';
import { Categories } from '../categories';

export const CategoryItem = ({ id, name, sub, source, parentId }) => {
    const shouldRenderChildren = !!sub.length;
    const subTree = sub.map(id => getCatById(source, id));

    function getCatById (source, id) {
        for(let i =0; i < source.length; i++) {
            if(source[i].id === id) {
                return source[i];
            }
        }
    }

    return (
        <li>
            { name }
            {
                shouldRenderChildren && (
                    <Categories tree={ subTree } source={ source }/>
                )
            }
        </li>
    )
}