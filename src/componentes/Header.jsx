import React from 'react'
import { Link } from 'wouter'

export default function Header() {
  return (

   <div className='header-tareas'>

        <div className='header-derecha'>
{/*           <button
            className='btn-eliminar'
            onClick={eliminar}
            disabled={seleccionadasCount === 0}
          >
            <MdDeleteOutline size={20} />
            {seleccionadasCount > 0 && <span className='contador'>{seleccionadasCount}</span>}
          </button> */}
            <Link className='btn-crear' href='/'>Inicio</Link>
            <Link className='btn-crear' href='/contenedor'>Contenedor</Link>
            <Link className='btn-crear' href='/formulario'>Formulario</Link>

        </div>
      </div> 


  )
}
/*     <div className='Header'>
        <Link className='Opcion' href='/'>Home</Link>
        <Link className='Opcion' href='/formulario'>Formulario</Link>
        <Link className='Opcion' href='/contenedor'>Contenedor</Link> */