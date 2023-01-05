import { React, useState } from 'react';
import tasks from '../../JSON/Task.json'; // archivo JSON con las tareas
import { Checkbox } from 'antd';
import '../../Styles/Funciones.css'
import { Input } from 'antd';
const { Search } = Input;

function All() {
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
    // función para cambiar el estado de una tarea
    const changeStatus = (e, index) => {
        // Si se marca el checkbox, se cambia el estado a "complete"
        if (e.target.checked) {
            tasks[index].status = "complete";
        }
        // Si se desmarca el checkbox, se cambia el estado a "active"
        else {
            tasks[index].status = "active";
        }
    };

    return (
        <div className='Lista'>
            {/* Añadir un input para agregar task */}
            <Search placeholder="Añade una tarea" allowClear enterButton="Añadir" size="large" onChange={addTaskInput} onSearch={addTaskJson} />
            {/* Mapear las tareas */}
            {tasks.map((task, index) => (
                <Checkbox
                    className='Checkbox'
                    key={task.id} defaultChecked={task.status === "complete"}
                    onChange={(e) => changeStatus(e, index)}
                    style={task.status === "complete" ? { textDecoration: "line-through" } : {}}
                >
                    {task.description}
                </Checkbox>
            ))}
        </div>
    );
}
export default All;

