import React, { useState } from 'react'
import TarjetaTarea from './TarjetaTarea'
import DetalleTarea from './DetalleTarea'
import Modal from './Modal'
import FiltroModal from './FiltroModal'
import { MdDeleteOutline } from 'react-icons/md'

export default function Contenedor({ tareas, setTareas, eliminar, onAbrirFormulario }) {

  const [detalleAbierto, setDetalleAbierto] = useState(false)
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null)

const [tareasFiltradas, setTareasFiltradas] = useState(tareas)
const [filtroActivo, setFiltroActivo] = useState('')

React.useEffect(() => {
  if (filtroActivo === '') {
    setTareasFiltradas(tareas)
  } else {
    const filtradas = tareas.filter(t => t.categoria === filtroActivo)
    setTareasFiltradas(filtradas)
  }
}, [tareas, filtroActivo])

  const abrirDetalle = (tarea) => {
    setTareaSeleccionada(tarea)
    setDetalleAbierto(true)
  }


  const seleccionadasCount = tareas.filter(t => t.selecionado).length;

  return (
    <>
      <div className='header-tareas'>
        <FiltroModal tareas={tareas} setTareasFiltradas={setTareasFiltradas}   setFiltroActivo={setFiltroActivo} />

        <div className='header-derecha'>
          <button
            className='btn-eliminar'
            onClick={eliminar}
            disabled={seleccionadasCount === 0}
          >
            <MdDeleteOutline size={20} />
            {seleccionadasCount > 0 && <span className='contador'>{seleccionadasCount}</span>}
          </button>

          <button className='btn-crear' onClick={onAbrirFormulario}>
            + Agregar Tarea
          </button>
        </div>
      </div>

      <div className='contenedor'>
        <div className='fila cabecera'>
          <div className='columna'>X</div>
          <div className='columna'>Titulo</div>
          <div className='columna'>Categoria</div>
          <div className='columna'>Estado</div>
          <div className='columna'>Fecha Creacion</div>
          <div className='columna'>Fecha Ven</div>
          <div className='columna'>Prioridad</div>
        </div>

        {tareasFiltradas.map((tarea, index) =>
          <div key={index} onClick={() => abrirDetalle(tarea)} className='fila-clickeable'>
            <TarjetaTarea
              index={index}
              tareas={tareas}
              setTareas={setTareas}
              titulo={tarea.titulo}
              categoria={tarea.categoria}
              estado={tarea.estado}
              FechaCreacion={tarea.FechaCreacion}
              FechaVencimiento={tarea.FechaVencimiento}
              prioridad={tarea.prioridad}
              seleccionado={tarea.selecionado}
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