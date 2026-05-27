import { useState } from 'react'
import './App.css'
import Contenedor from './componentes/Contenedor'
import Formulario from './componentes/Formulario'
import Modal from './componentes/Modal'


  let tareasDefault = [
    {    titulo: "Limpiar cocina",categoria: "Hogar",estado:"Pendiente",FechaCreacion: "03/03/2026",FechaVencimiento: "05-05-2026",prioridad: "Alta",selecionado: false},
    {    titulo: "Hacer tarea",categoria: "Colegio",estado:"En proceso",FechaCreacion: "03/03/2026",FechaVencimiento: "05-05-2026",prioridad: "Media",selecionado: false},
    {    titulo: "Leer libro",categoria: "Colegio",estado:"Finalizado",FechaCreacion: "03/03/2026",FechaVencimiento: "05-05-2026",prioridad: "Baja",selecionado: false},

  ]

function App() {

  const [tareas, setTareas] = useState(tareasDefault)

  const [abierto,setAbierto] = useState(false)

  const eliminarSeleccionadas = () => {
    const tareasActualizadas = tareas.filter(tarea => !tarea.selecionado)
    setTareas(tareasActualizadas)
  }

  const guardar = (tarea) => {

    console.log(tarea);
    let nuevasTareas = [...tareas];
    nuevasTareas.push(tarea)

    setTareas(nuevasTareas)
  }



  console.log({tareas})

  return (
    <>



    <Modal
    abierto={abierto}
    cerrar={() => setAbierto(false)}
    >

      <Formulario
      guardar={(tarea) => guardar(tarea)}
      />


    </Modal>

    <Contenedor
    tareas={tareas}
    setTareas={setTareas}
    eliminar={eliminarSeleccionadas}
    onAbrirFormulario={() => setAbierto(true)} 
    

    />

    </>
  )
}

export default App
