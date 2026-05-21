import React, { useState } from 'react'

function TarjetaTarea({titulo,categoria,estado,FechaCreacion,FechaVencimiento,prioridad,seleccionado}) {


  const [check,setCheck] = useState(seleccionado|| false)


  const getEstadoClass = (estado) => {
    let estadoNormalizado = estado.toLowerCase();
    if (estadoNormalizado === "pendiente") return 'estado-pendiente'
    if (estadoNormalizado === 'en proceso') return 'estado-en-proceso';
    if (estadoNormalizado === 'finalizado') return 'estado-finalizado';
    return "estado-pendiente";
  }

    const getPrioridadClass = (prioridad) => {
    const prioridadNormalizada = prioridad.toLowerCase();
    if (prioridadNormalizada === 'alta') return 'prioridad-alta';
    if (prioridadNormalizada === 'media') return 'prioridad-media';
    if (prioridadNormalizada === 'baja') return 'prioridad-baja';
    return 'prioridad-baja';
  };


  return (
    <div className='fila'>
      <div className='columna checkbox-col'>
        <input 
        type="checkbox"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
        />


      </div>

        <div className='columna'>{titulo}</div>
        <div className='columna'>{categoria}</div>
        <div className={`columna ${getEstadoClass(estado)}`}>{estado}</div>
        <div className='columna'>{FechaCreacion}</div>
        <div className='columna'>{FechaVencimiento}</div>
        <div className={`columna  ${getPrioridadClass(prioridad)}`}>{prioridad}</div>

        


    

    </div>
  )
}

export default TarjetaTarea