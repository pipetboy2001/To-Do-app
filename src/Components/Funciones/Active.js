import { React, useState } from 'react';
import tasks from './../../JSON/Task.json'; // archivo JSON con las tareas
import { Checkbox } from 'antd';
import '../../Styles/Funciones.css'
import { Input } from 'antd';
const { Search } = Input;


function Active() {
    // constante para añadir un nuevo id
    const nextId = tasks[tasks.length - 1].id + 1;
    // constante para añadir una nueva tarea
    const [newTask, setNewTask] = useState({
        id: nextId,
        description: '',
        status: 'active',
    });
    // función para añadir una nueva tarea al json
    //y luego refresca 
    const addTaskJson = () => {
        tasks.push(newTask);
        setNewTask({
            id: nextId + 1,
            description: '',
            status: 'active',
        });
    };
    // función para añadir una nueva tarea al input
    const addTaskInput = (e) => {
        setNewTask({
            ...newTask,
            description: e.target.value,
        });
    };

    return (
        <div className='Lista'>
            {/* Añadir un input para agregar task */}
            <Search placeholder="Añade una tarea" allowClear enterButton="Añadir" size="large" onChange={addTaskInput} onSearch={addTaskJson} />
            {tasks
                .filter((task) => task.status === 'active')
                .map((task) => (
                    <Checkbox className='Checkbox' key={task.id}>{task.description}</Checkbox>
                ))}
        </div>
    );
}
export default Active;
