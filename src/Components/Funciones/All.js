import { React, useState } from 'react';
import '../../Styles/Funciones.css'
import tasks from '../../JSON/Task.json'; // archivo JSON con las tareas
//icons
import { IoTrashBin } from "react-icons/io5";

//Ant impor
import { Checkbox } from 'antd';
import { Input } from 'antd';
const { Search } = Input;

function All() {

    //Conservar en el navegador
    window.localStorage.setItem("tasksSave", JSON.stringify(tasks));
    const tasksSave = JSON.parse(window.localStorage.getItem("tasksSave"));


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
    
    // función para eliminar una tarea
    const deleteTask = (index) => {
        if (tasks.length > 2) {
            if (window.confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
                tasks.splice(index, 1);
            }
        }
        else {
            alert("No puedes eliminar todas las tareas");
        }
    };

    return (
        <div className='Lista'>
            {/* Añadir un input para agregar task */}
            <Search placeholder="Añade una tarea" allowClear enterButton="Añadir" size="large" onChange={addTaskInput} onSearch={addTaskJson} />
            {/* Mapear las tareas */}
            {tasksSave.map((task, index) => (
                <Checkbox
                    className='Checkbox'
                    key={task.id} defaultChecked={task.status === "complete"}
                    onChange={(e) => changeStatus(e, index)}
                    style={task.status === "complete" ? { textDecoration: "line-through" } : {}}>
                    {task.description}
                    <div className="icon-container">
                        <IoTrashBin className='trash' onClick={() => deleteTask(index)} />
                    </div>
                </Checkbox>
            ))}
        </div>
    );
}
export default All;

