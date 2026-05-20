import './App.css'
import Contenedor from './componentes/Contenedor'

function App() {

  let tareas = [
    {    titulo: "Webo Wick",categoria: "Accion",estado:"Pendiente",FechaCreacion: "03-03-2026",FechaVencimiento: "05-05-2026",prioridad: "Alta",selecionado: false},
    {    titulo: "Mc Wick",categoria: "Accion",estado:"Pendiente",FechaCreacion: "03-03-2026",FechaVencimiento: "05-05-2026",prioridad: "Media",selecionado: false},
    {    titulo: "Chino Wick",categoria: "Accion",estado:"Pendiente",FechaCreacion: "03-03-2026",FechaVencimiento: "05-05-2026",prioridad: "Baja",selecionado: false},

  ]


  return (
    <>

    <Contenedor
    
    tareas={tareas}
    

    />
    </>
  )
}

export default App
