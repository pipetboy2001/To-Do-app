import React, { Component } from 'react';
import ActiveTasks from './Funciones/Active';
import CompleteTasks from './Funciones/Complete';
import AllTasks from './Funciones/All';
import { Segmented } from 'antd';
import ReactDOM from 'react-dom';
import '../Styles/Todo.css'

class TODO extends Component {
    state = {
        currentPage: 'all',
    };

    handlePageChange = (page) => {
        this.setState({
            currentPage: page,
        });
    };

    render() {
        return (
            <div className='container'>
                <h1>#To Do</h1>
                <Segmented
                    block
                    options={['All', 'Active', 'Complete']}
                    onChange={this.handlePageChange}
                />
                {this.state.currentPage === 'All' && <AllTasks />}
                {this.state.currentPage === 'Active' && <ActiveTasks />}
                {this.state.currentPage === 'Complete' && <CompleteTasks />}
            </div>
        );
    }
}

ReactDOM.render(<TODO />, document.getElementById('root'));

export default TODO;
