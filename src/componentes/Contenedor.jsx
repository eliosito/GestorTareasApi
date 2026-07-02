import React, { useEffect, useState } from 'react'
import TarjetaTarea from './TarjetaTarea'
import DetalleTarea from './DetalleTarea'
import axios from 'axios'
import Modal from './Modal'
import FiltroModal from './FiltroModal'
import { MdDeleteOutline } from 'react-icons/md'
export default function Contenedor() {

  const [tareas, setTareas] = useState([])

  const actualizar = () => {
    const url = "https://api-tareas.ctpoba.edu.ar/api/tareas"

    const config = {
      headers: { Authorization: "48354750" }
    }

    console.log("hola")

    axios.get(url,config)
      .then((resp) => {
        
        console.log(resp)
        setTareas(resp.data.tareas)

      })
      .catch((error) => {
        console.error(error)
      })
    
  }

  useEffect(() =>{
    console.log("Tareas cargadas")
    actualizar();
  },[])


  const [detalleAbierto, setDetalleAbierto] = useState(false)
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null)



  const abrirDetalle = (tarea) => {
    setTareaSeleccionada(tarea)
    setDetalleAbierto(true)
  }



  const eliminar = (persona_id) => {
    const url = `https://api-tareas.ctpoba.edu.ar/api/tareas/${persona_id}`
    const config = {
      headers: { Authorization: "48354750" }
    }

    axios.delete(url, config)
      .then((resp) => {
        console.log(resp.data);
        alert("Se elimino la tarea")
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        actualizar()
      })
  }

  return (
    <>
    {/**/}

      <div className='contenedor'>
        <div className='fila cabecera'>
          <div className='columna'>X</div>
          <div className='columna'>Titulo</div>
          <div className='columna'>Categoria</div>
          <div className='columna'>Estado</div>
          <div className='columna'>Prioridad</div>
        </div>

        {tareas.map((tarea, index) =>
          <div key={index} onClick={() => abrirDetalle(tarea)} className='fila-clickeable'>
            <TarjetaTarea
              tareas={tareas}
              setTareas={setTareas}
              nombre={tarea.nombre}
              categoria={tarea.categoria}
              estado={tarea.estado}
              prioridad={tarea.prioridad}
              eliminar={() => eliminar(tarea.id)}
            />
          </div>
        )}
      </div>

      <Modal
        abierto={detalleAbierto}
        cerrar={() => setDetalleAbierto(false)}
      >
        {tareaSeleccionada && (
          <DetalleTarea
            tarea={tareaSeleccionada}
            cerrar={() => setDetalleAbierto(false)}
          />
        )}
      </Modal>
    </>
  )
}