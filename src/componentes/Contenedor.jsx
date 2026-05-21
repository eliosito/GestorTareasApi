import React from 'react'
import TarjetaTarea from './TarjetaTarea'

export default function Contenedor({tareas}) {
  return (

    <div className='contenedor'>
        <div className='fila cabecera'>
            <div className='columna'>X</div>
            <div className='columna'>Titulo</div>
            <div className='columna'>Categoria</div>
            <div className='columna'>Estado</div>
            <div className='columna'>Fecha Creacion</div>
            <div className='columna'>Fecha Ven</div>
            <div className='columna'>Prioridad</div>

        </div>

        {tareas.map((tarea, index)=>
        <TarjetaTarea
        titulo={tarea.titulo}
        categoria={tarea.categoria}
        estado={tarea.estado}
        FechaCreacion={tarea.FechaCreacion}
        FechaVencimiento={tarea.FechaVencimiento}
        prioridad={tarea.prioridad}


        
        />
        
        
        )}
    </div>
  )
}
