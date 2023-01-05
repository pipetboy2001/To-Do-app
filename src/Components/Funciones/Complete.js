import React from 'react';
import tasks from './../../JSON/Task.json'; // archivo JSON con las tareas

function Complete() {
    return (
        <ul>
            {tasks
                .filter((task) => task.status === 'complete')
                .map((task) => (
                    <li key={task.id}>{task.description}</li>
                ))}
        </ul>
    );
}

export default Complete;
