import React from 'react'

function TarjetaTarea({titulo,categoria,estado,FechaCreacion,FechaVencimiento,prioridad,seleccionado}) {
  return (
    <div className='fila'>

        <div className='columna'>{titulo}</div>
        <div className='columna'>{categoria}</div>
        <div className='columna'>{estado}</div>
        <div className='columna'>{FechaCreacion}</div>
        <div className='columna'>{FechaVencimiento}</div>
        <div className='columna'>{prioridad}</div>

        


    

    </div>
  )
}

export default TarjetaTarea