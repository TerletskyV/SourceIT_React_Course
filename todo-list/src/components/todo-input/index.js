import React, { Component } from 'react';
import { itemConnector } from './connector';

class Input extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: null,
            name: '',
            desc: ''
        }
    }

    addTodo(ev) {
        ev.preventDefault();

        this.props.addItem({
            id: Math.random(),
            name: this.state.name,
            desc: this.state.desc
        })

        this.setState({
            name: '',
            desc: ''
        })
    }

    render() {
        return(
        <form onSubmit={ this.addTodo.bind(this) }>
            <input type="text" placeholder="What to do?" value={this.state.name} onChange={
                (ev) => {this.setState({ name: ev.target.value })}
            }/>
            <input type="text" placeholder="Description" value={this.state.desc} onChange={
                    (ev) => { this.setState({ desc: ev.target.value }) }
                }/>
            <button type="submit">ADD</button>
        </form>
        )
    }

}

export const TodoInput = itemConnector(Input);
