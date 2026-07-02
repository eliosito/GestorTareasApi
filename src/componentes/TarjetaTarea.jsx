import React, { useState } from 'react'

function TarjetaTarea({ nombre, categoria, estado, prioridad, seleccionado, setTareas, tareas }) {




  const getEstadoClass = (estado) => {
    let estadoNormalizado = estado.toLowerCase();
    if (estadoNormalizado === "pendiente") return 'estado-pendiente'
    if (estadoNormalizado === 'en proceso') return 'estado-en-proceso';
    if (estadoNormalizado === 'finalizado') return 'estado-finalizado';
    return "estado-pendiente";
  }

  const getPrioridadClass = (prioridad) => {
    const prioridadString = String(prioridad).trim();
    if (prioridadString === '1') return 'prioridad-alta';
    if (prioridadString === '2') return 'prioridad-media';
    if (prioridadString === '3') return 'prioridad-baja';
    return 'prioridad-baja';
  };

  const getPrioridadTexto = (prioridad) => {
    const prioridadString = String(prioridad).trim();
    if (prioridadString === '1') return 'Alta';
    if (prioridadString === '2') return 'Media';
    if (prioridadString === '3') return 'Baja';
    return prioridad;
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



        <div className={`columna  ${getPrioridadClass(prioridad)}`}>{getPrioridadTexto(prioridad)}</div>






    </div>
  )
}

export default TarjetaTarea