import React from 'react'
import { Link } from 'wouter'

export default function Header() {
  return (
    <div className='Header'>
        <Link className='Opcion' href='/'>Home</Link>
        <Link className='Opcion' href='/formulario'>Formulario</Link>
        <Link className='Opcion' href='/contenedor'>Contenedor</Link>



    </div>
  )
}
