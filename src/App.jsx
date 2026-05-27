import { useState } from 'react'
import './App.css'
import Contenedor from './componentes/Contenedor'
import Formulario from './componentes/Formulario'
import Modal from './componentes/Modal'

function App() {

  const [abierto,setAbierto] = useState(false)

  let tareas = [
    {    titulo: "Webo Wick",categoria: "Accion",estado:"Pendiente",FechaCreacion: "03-03-2026",FechaVencimiento: "05-05-2026",prioridad: "Alta",selecionado: false},
    {    titulo: "Mc Wick",categoria: "Accion",estado:"En proceso",FechaCreacion: "03-03-2026",FechaVencimiento: "05-05-2026",prioridad: "Media",selecionado: false},
    {    titulo: "Chino Wick",categoria: "Accion",estado:"Finalizado",FechaCreacion: "03-03-2026",FechaVencimiento: "05-05-2026",prioridad: "Baja",selecionado: false},

  ]

  console.log({tareas})

  return (
    <>

    <button onClick={() => setAbierto(true)}>
    Crear Tarea
    </button>

    <Modal
    abierto={abierto}
    cerrar={() => setAbierto(false)}
    >

      <Formulario/>


    </Modal>

    <Contenedor
    
    tareas={tareas}
    

    />

    </>
  )
}

export default App
