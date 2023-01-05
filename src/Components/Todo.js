import React from 'react'
import All from './Funciones/All'
import '../Styles/Todo.css'
import Complete from './Funciones/Complete'
import Active from './Funciones/Active'


export const Todo = () => {
  return (
    <div className='container'>
        <h1>#Todo</h1>
        {/* aqui va la seleccion entre all active o completed */}

        {/* aqui va todo listado de tareas */}
        <All/>

        {/* aqui va el boton de clear completed */}
        <Complete/>

        {/* y aqui van las que faltan por realizar */}
        <Active/>

    </div>
  )
}

export default Todo