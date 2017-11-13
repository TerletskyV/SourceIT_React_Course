import React, { Component } from 'react';
import './index.css';

class UsersComponent extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (
            <div className='users'>
                <div className='users__header'>
                    <p className='users__header__text'>Users</p>
                    <button className='users__header__button'>
                        Add user <span className='users__header__button_cross'></span>
                    </button>
                </div>
                <div className='users__body'>
                    <table className='users__body__table'></table>
                </div>
            </div>
        )
    }
}

export default UsersComponent;