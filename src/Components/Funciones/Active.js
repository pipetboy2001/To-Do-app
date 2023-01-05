import React from 'react';
import tasks from './../../JSON/Task.json'; // archivo JSON con las tareas

function Active() {
    return (
        <ul>
            {tasks
                .filter((task) => task.status === 'active')
                .map((task) => (
                    <li key={task.id}>{task.description}</li>
                ))}
        </ul>
    );
}

export default Active;
