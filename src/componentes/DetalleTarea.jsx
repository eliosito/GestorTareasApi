import React, { useEffect, useState } from 'react'
import { MdChecklistRtl, MdDescription, MdOutlineFlag, MdCalendarToday, MdKeyboardArrowUp } from 'react-icons/md'
import axios from 'axios'

export default function DetalleTarea({ tarea, cerrar }) {
    const [tareaDetalle, setTareaDetalle] = useState(tarea)
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        if (tarea && tarea.id) {
            setCargando(true)
            const url = `https://api-tareas.ctpoba.edu.ar/api/tareas/${tarea.id}`
            const config = {
                headers: { Authorization: "48354750" }
            }

            axios.get(url, config)
                .then((resp) => {
                    setTareaDetalle(resp.data.tarea)
                    setCargando(false)
                })
                .catch((error) => {
                    console.error(error)
                    setCargando(false)
                })
        }
    }, [tarea.id])

    const getEstadoColor = (estado) => {
        const estadoNormalizado = estado.toLowerCase();
        if (estadoNormalizado === "pendiente") return '#fff3cd'
        if (estadoNormalizado === 'en proceso') return '#fff3cd';
        if (estadoNormalizado === 'finalizado') return '#d4edda';
        return '#fff3cd';
    }

    const getPrioridadColor = (prioridad) => {
        const prioridadNormalizada = prioridad.toLowerCase();
        if (prioridadNormalizada === 'alta') return '#e8d4f8';
        if (prioridadNormalizada === 'media') return '#d4e8f8';
        if (prioridadNormalizada === 'baja') return '#d4f0f8';
        return '#d4f0f8';
    }

    if (cargando) {
        return <div className='detalle-contenedor'><p>Cargando...</p></div>
    }

    return (
        <div className='detalle-contenedor'>
            <div className='detalle-header'>
                <h2>Detalle de la Tarea</h2>
                <button onClick={cerrar} className='detalle-cerrar'>✕</button>
            </div>

            <hr className='detalle-separator' />

            <div className='detalle-seccion'>
                <div className='detalle-icono-contenedor' style={{ backgroundColor: '#e8d4f8' }}>
                    <MdChecklistRtl className='detalle-icono' style={{ color: '#6c11c4' }} />
                </div>
                <div className='detalle-contenido'>
                    <p className='detalle-label'>Titulo</p>
                    <p className='detalle-valor'>{tareaDetalle.nombre}</p>
                </div>
            </div>

            <hr className='detalle-separator' />

            <div className='detalle-seccion-full'>
                <p className='detalle-label-full'>Descripción</p>
                <p className='detalle-valor-full'>{tareaDetalle.descripcion || 'Sin descripción'}</p>
            </div>

            <hr className='detalle-separator' />


            <div className='detalle-grid'>
                <div className='detalle-seccion'>
                    <div className='detalle-icono-contenedor' style={{ backgroundColor: '#fff3cd' }}>
                        <MdOutlineFlag className='detalle-icono' style={{ color: '#ff9800' }} />
                    </div>
                    <div className='detalle-contenido'>
                        <p className='detalle-label'>Estado</p>
                        <span className='detalle-badge' style={{ backgroundColor: getEstadoColor(tareaDetalle.estado) }}>
                            {tareaDetalle.estado}
                        </span>
                    </div>
                </div>

                                <div className='detalle-seccion'>
                    <div className='detalle-icono-contenedor' style={{ backgroundColor: getPrioridadColor(tareaDetalle.prioridad) }}>
                        <MdKeyboardArrowUp className='detalle-icono' style={{ color: '#6c11c4' }} />
                    </div>
                    <div className='detalle-contenido'>
                        <p className='detalle-label'>Prioridad</p>
                        <span className='detalle-badge' style={{ backgroundColor: getPrioridadColor(tareaDetalle.prioridad) }}>
                            {tareaDetalle.prioridad}
                        </span>
                    </div>
                </div>

            </div>



            <hr className='detalle-separator' />

            <div className='detalle-footer'>
                <button onClick={cerrar} className='detalle-boton-cerrar'>Cerrar</button>
            </div>
        </div>
    )
}