import React, { Component } from 'react';
import '../../Styles/Funciones.css';
import tasks from '../../JSON/Task.json'; // archivo JSON con las tareas
//icons
import { IoTrashBin } from "react-icons/io5";

//Ant impor
import { Checkbox } from 'antd';

class Complete extends Component {
    constructor() {
        super();
        window.localStorage.setItem("tasksSave", JSON.stringify(tasks));
        this.tasksSave = JSON.parse(window.localStorage.getItem("tasksSave"));

        this.changeStatus = this.changeStatus.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleDeleteCompleted = this.handleDeleteCompleted.bind(this);
    }

    // función para cambiar el estado de una tarea
    changeStatus(e, index) {
        // Si se marca el checkbox, se cambia el estado a "complete"
        if (e.target.checked) {
            tasks[index].status = "complete";
        }
        // Si se desmarca el checkbox, se cambia el estado a "active"
        else {
            tasks[index].status = "active";
        }
    }

    //Que el atributo sea Complete
    get completeTasksSave() {
        return this.tasksSave.filter(task => task.status === "complete");
    }


    // función para eliminar una tarea
    deleteTask(index) {
    if (tasks.length > 2) {
        if (window.confirm("¿Estás seguro de que quieres eliminar esta tarea?")) {
            tasks.splice(index, 1);
        }
    }
    else {
        window.alert("No puedes eliminar todas las tareas");
    }
    }


    /// función para eliminar todas las tareas completadas
    handleDeleteCompleted() {
        // obtén solo las tareas que no están completadas
        const remainingTasks = this.tasksSave.filter(task => task.status !== "complete");
        // actualiza el estado de las tareas
        this.setState({ tasks: remainingTasks });
        // eleminar usando splice
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].status === "complete") {
                tasks.splice(i, 1);
                i--;
            }
        }
    }


render() {
    return (
        <div className='Lista'>
            {this.completeTasksSave.map((task, index) => (
                <Checkbox
                    className='Checkbox'
                    key={task.id}
                    checked={task.status === "complete"}
                    onChange={(e) => this.changeStatus(e, index)}
                    style={task.status === "complete" ? { textDecoration: "line-through" } : {}}>
                    {task.description}
                    <div className="icon-container">
                        <IoTrashBin className='trash' onClick={() => this.deleteTask(index)} />
                    </div>
                </Checkbox>
            ))}
            <button className='trashAll' onClick={this.handleDeleteCompleted}>Borrar todos<IoTrashBin/></button>
        </div>
    );
}
}

export default Complete;
