import React from 'react';
import { CategoryItem } from '../category-item';
import './index.css';

export const Categories = ({ tree, source}) => {
    return(
        <ol>
            {
                tree.map(cat =>
                <CategoryItem key={ cat.id } { ...cat } source={ source } />)
            }
        </ol>
    )
}