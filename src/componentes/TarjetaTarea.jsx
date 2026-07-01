import React, { useState } from 'react'

function TarjetaTarea({ nombre, categoria, estado, FechaCreacion, FechaVencimiento, prioridad, seleccionado, index, setTareas, tareas }) {

  const handleCheckChange = (e) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[index].selecionado = e.target.checked;
    setTareas(tareasActualizadas);
  }



  const getEstadoClass = (estado) => {
    let estadoNormalizado = estado.toLowerCase();
    if (estadoNormalizado === "pendiente") return 'estado-pendiente'
    if (estadoNormalizado === 'en proceso') return 'estado-en-proceso';
    if (estadoNormalizado === 'finalizado') return 'estado-finalizado';
    return "estado-pendiente";
  }

  const getPrioridadClass = (prioridad) => {
    const prioridadNormalizada = prioridad.toLowerCase();
    if (prioridadNormalizada === 1) return 'prioridad-alta';
    if (prioridadNormalizada === 2) return 'prioridad-media';
    if (prioridadNormalizada === 3) return 'prioridad-baja';
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

        
{/*       <div className='columna'>{FechaCreacion}</div>
      <div className='columna'>{FechaVencimiento}</div> */}
      <div className={`columna  ${getPrioridadClass(prioridad)}`}>{prioridad}</div>






    </div>
  )
}

export default TarjetaTarea