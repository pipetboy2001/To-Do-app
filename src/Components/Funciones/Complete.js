import { React } from 'react';
import '../../Styles/Funciones.css'
import tasks from '../../JSON/Task.json'; // archivo JSON con las tareas
//icons
import { IoTrashBin } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";

//Ant impor
import { Checkbox } from 'antd';

function Complete() {
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
    const completeTasks = tasks.filter(task => task.status === "complete");

    // función para eliminar una tarea
    const deleteTask = (index) => {
        tasks.splice(index, 1);
    };

    return (
        <div className='Lista'>
            
            {completeTasks.map((task, index) => (
                <Checkbox
                    className='Checkbox'
                    key={task.id}
                    checked={task.status === "complete"}
                    onChange={(e) => changeStatus(e, index)}
                    style={task.status === "complete" ? { textDecoration: "line-through" } : {}}>
                    {task.description} 
                    <div className="icon-container">
                        <IoPencil className='pencil' />
                        <IoTrashBin className='trash' onClick={() => deleteTask(index)} />
                    </div>
                </Checkbox>
            ))}

        </div>
    );
}
export default Complete;

