import React from 'react';
import tasks from './../../JSON/Task.json'; // archivo JSON con las tareas
import { Checkbox } from 'antd';

import '../../Styles/Funciones.css'

function Complete() {
    return (
        <div className='Lista'>
            {tasks
                .filter((task) => task.status === 'complete')
                .map((task) => (
                    <Checkbox className='Checkbox' key={task.id}>{task.description}</Checkbox>
                ))}
        </div>
    );
}

export default Complete;
