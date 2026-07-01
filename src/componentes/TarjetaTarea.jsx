import React, { useState } from 'react'

function TarjetaTarea({ nombre, categoria, estado, FechaCreacion, FechaVencimiento, prioridad, seleccionado, index, setTareas, tareas }) {




  const getEstadoClass = (estado) => {
    let estadoNormalizado = estado.toLowerCase();
    if (estadoNormalizado === "pendiente") return 'estado-pendiente'
    if (estadoNormalizado === 'en proceso') return 'estado-en-proceso';
    if (estadoNormalizado === 'finalizado') return 'estado-finalizado';
    return "estado-pendiente";
  }

  const getPrioridadClass = (prioridad) => {
    if (prioridad === 1) return 'prioridad-alta';
    if (prioridad === 2) return 'prioridad-media';
    if (prioridad === 3) return 'prioridad-baja';
    return 'prioridad-baja';
  };




  return (
    <div className='fila'>

      <div className='checkbox-col'>

      </div>

      <div className='columna'>{nombre}</div>
      <div className='columna'>{categoria}</div>

      <div
        className={`columna estado ${getEstadoClass(estado)}`}
        onClick={(e) => {
          e.stopPropagation()  // no abrir el modal de detalles

        }}
        style={{ cursor: 'pointer' }}
      >
        {estado}
      </div>



      <div className={`columna  ${getPrioridadClass(prioridad)}`}>{prioridad}</div>






    </div>
  )
}

export default TarjetaTarea