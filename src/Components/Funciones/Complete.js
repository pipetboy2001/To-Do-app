import { React } from 'react';
import '../../Styles/Funciones.css'
import tasks from '../../JSON/Task.json'; // archivo JSON con las tareas
//icons
import { IoTrashBin } from "react-icons/io5";

//Ant impor
import { Checkbox } from 'antd';

function Complete() {

    //Conservar en el navegador
    localStorage.setItem("tasksSave", JSON.stringify(tasks));
    const tasksSave = JSON.parse(localStorage.getItem("tasksSave"));

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

    //Que el atributo sea Complete
    const completeTasksSave = tasksSave.filter(task => task.status === "complete");

    // función para eliminar una tarea
    const deleteTask = (index) => {
        if (tasks.length > 2) {
            if (window.confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
                tasks.splice(index, 1);
            }
        }
        else {
            window.alert("No puedes eliminar todas las tareas");
        }
    };

    return (
        <div className='Lista'> 
            {completeTasksSave.map((task, index) => (
                <Checkbox
                    className='Checkbox'
                    key={task.id}
                    checked={task.status === "complete"}
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
export default Complete;

