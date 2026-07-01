import React from 'react'
export default function Home() {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h1>
          Hola , Bienvenido <br />
          al Gestor de <br />
          Tareas
        </h1>
      </div>
      <div className="welcome-image">
        <img src="/foto.png" alt="Icono Gestor de Tareas" />
      </div>
    </div>
  )
}
