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
            console.log(tasks);
        }
        // Si se desmarca el checkbox, se cambia el estado a "active"
        else {
            tasks[index].status = "active";
            console.log(tasks);
        }
    };

    //Que el atributo sea Complete
    const completeTasksSave = tasksSave.filter(task => task.status === "complete");

    // función para eliminar una tarea
    const deleteTask = (index) => {
        if (tasks.length > 2) {
            if (window.confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
                tasks.splice(index, 1);
                console.log(tasks);
            }
        }
        else {
            window.alert("No puedes eliminar todas las tareas");
        }
    };

    // funcion para eliminar todas las tareas 'complete'
    const deleteAll = () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar todas las tareas completadas?")) {

            //guardando en el localstorage las tareas 'active'
            const activeTasks = tasks.filter(task => task.status === "active");
            localStorage.setItem("tasksSave", JSON.stringify(activeTasks));
            //for eleminando SOLAMENTE 'active'
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].status === "complete") {
                    tasks.splice(i, 1);
                    i--;
                    //seguridad debe quedar 2 en task.lenght
                    if (tasks.length > 0) {
                        console.log(tasks);
                        break;
                    }
                }
            }
            console.log(tasks);
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
                //boton que borra todas las tareas
            ))} <button className='trashAll' onClick={() => deleteAll()}>Borrar todo <IoTrashBin /></button>
        
        </div>
    );
}
export default Complete;