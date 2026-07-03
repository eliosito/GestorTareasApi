import React, { useEffect, useState } from 'react'
import TarjetaTarea from './TarjetaTarea'
import DetalleTarea from './DetalleTarea'
import axios from 'axios'
import Modal from './Modal'
import FiltroModal from './FiltroModal'
import { MdDeleteOutline } from 'react-icons/md'

import { MdDelete } from "react-icons/md";

export default function Contenedor() {

  const [tareas, setTareas] = useState([])
  const [categoriaFiltro, setCategoriaFiltro] = useState("")
  const [orden, setOrden] = useState("")

  const actualizar = (categoria = "", orden = "") => {
    let url = "https://api-tareas.ctpoba.edu.ar/api/tareas"
    const params = []

    if (categoria) {
      params.push(`categoria=${categoria}`)
    }
    if (orden) {
      params.push(`orden=${orden}`)
    }

    if (params.length > 0) {
      url = url + "?" + params.join("&")
    }
    // Resultado: ?categoria=Trabajo&orden=ASC

    const config = {
      headers: { Authorization: "48354750" }
    }

    console.log("hola")

    axios.get(url, config)
      .then((resp) => {

        console.log(resp)
        setTareas(resp.data.tareas)

      })
      .catch((error) => {
        console.error(error)
      })

  }

  useEffect(() => {
    console.log("Tareas cargadas")
    actualizar();
  }, [])



  const [detalleAbierto, setDetalleAbierto] = useState(false)
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null)



  const abrirDetalle = (tarea) => {
    setTareaSeleccionada(tarea)
    setDetalleAbierto(true)
  }



  const eliminar = (tarea_id) => {
    let url = `https://api-tareas.ctpoba.edu.ar/api/tareas/${tarea_id}`
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
        actualizar(categoriaFiltro)
      })
  }


  const cambiarEstado = (tarea_id) => {

    let url = `https://api-tareas.ctpoba.edu.ar/api/tareas/estado/${tarea_id}`

    const config = {
      headers: { Authorization: "48354750" }
    }

    const body = {
      estado: "completada"
    }

    axios.put(url, body, config)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        actualizar(categoriaFiltro)  // Recarga las tareas para ver el cambio
      })

  }


  const cambiarFiltro = (categoria) => {
    setCategoriaFiltro(categoria)
    actualizar(categoria)
  }

  const cambiarOrden = (orden) => {
    setOrden(orden)
    actualizar(orden)
  }


  useEffect(() => {
    actualizar(categoriaFiltro, orden)
  }, [categoriaFiltro, orden])
  return (
    <>
      {/**/}
      <div className='filtro-header'>
        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className='filtro-select'
        >
          <option value="">Todas las categorías</option>
          <option value="Hogar">Hogar</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Personal">Personal</option>
        </select>

        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className='filtro-select'
        >
          <option value="">Ordenar</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>

        </select>

      </div>



      <div className='contenedor'>
        <div className='fila cabecera'>
          <div className='columna'><MdDelete size={17} /></div>
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
              cambiarEstado={() => cambiarEstado(tarea.id)}
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