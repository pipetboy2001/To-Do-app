import { React} from 'react';
import tasks from '../../JSON/Task.json'; // archivo JSON con las tareas
import { Checkbox } from 'antd';
import '../../Styles/Funciones.css'

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


    return (
        <div className='Lista'>
            
            {completeTasks.map((task, index) => (
                <Checkbox
                    className='Checkbox'
                    key={task.id}
                    defaultChecked={task.status === "complete"}
                    onChange={(e) => changeStatus(e, index)}
                    style={task.status === "complete" ? { textDecoration: "line-through" } : {}}>
                    {task.description}
                </Checkbox>
            ))}

        </div>
    );
}
export default Complete;

