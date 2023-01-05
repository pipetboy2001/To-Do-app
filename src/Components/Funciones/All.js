import React from 'react';
import tasks from '../../JSON/Task.json'; // archivo JSON con las tareas

function All() {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.description}</li>
            ))}
        </ul>
    );
}

export default All;
