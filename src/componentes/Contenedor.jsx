import React from 'react'
import TarjetaTarea from './TarjetaTarea'

export default function Contenedor({tareas}) {
  return (

    <div className='Contenedor'>
        {tareas.map((tarea, index)=>
        <TarjetaTarea
        titulo={tarea.titulo}
        categoria={tarea.categoria}
        
        />
        
        
        )}
    </div>
  )
}
