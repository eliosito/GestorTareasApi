import React from 'react'
import { MdChecklistRtl, MdDescription, MdOutlineFlag, MdCalendarToday, MdKeyboardArrowUp } from 'react-icons/md'
export default function DetalleTarea({ tarea, cerrar }) {

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
                    <p className='detalle-valor'>{tarea.titulo}</p>
                </div>
            </div>

            <hr className='detalle-separator' />

            <div className='detalle-seccion-full'>
                <p className='detalle-label-full'>Descripción</p>
                <p className='detalle-valor-full'>{tarea.descripcion || 'Sin descripción'}</p>
            </div>

            <hr className='detalle-separator' />


            <div className='detalle-grid'>
                <div className='detalle-seccion'>
                    <div className='detalle-icono-contenedor' style={{ backgroundColor: '#fff3cd' }}>
                        <MdOutlineFlag className='detalle-icono' style={{ color: '#ff9800' }} />
                    </div>
                    <div className='detalle-contenido'>
                        <p className='detalle-label'>Estado</p>
                        <span className='detalle-badge' style={{ backgroundColor: getEstadoColor(tarea.estado) }}>
                            {tarea.estado}
                        </span>
                    </div>
                </div>

                <div className='detalle-seccion'>
                    <div className='detalle-icono-contenedor' style={{ backgroundColor: '#f8d4d4' }}>
                        <MdCalendarToday className='detalle-icono' style={{ color: '#d32f2f' }} />
                    </div>
                    <div className='detalle-contenido'>
                        <p className='detalle-label'>Fecha de creación</p>
                        <p className='detalle-valor'>{tarea.FechaCreacion}</p>
                    </div>
                </div>
            </div>


            <div className='detalle-grid'>
                <div className='detalle-seccion'>
                    <div className='detalle-icono-contenedor' style={{ backgroundColor: '#d4e8f8' }}>
                        <MdCalendarToday className='detalle-icono' style={{ color: '#1976d2' }} />
                    </div>
                    <div className='detalle-contenido'>
                        <p className='detalle-label'>Fecha de vencimiento</p>
                        <p className='detalle-valor'>{tarea.FechaVencimiento}</p>
                    </div>
                </div>

                <div className='detalle-seccion'>
                    <div className='detalle-icono-contenedor' style={{ backgroundColor: getPrioridadColor(tarea.prioridad) }}>
                        <MdKeyboardArrowUp className='detalle-icono' style={{ color: '#6c11c4' }} />
                    </div>
                    <div className='detalle-contenido'>
                        <p className='detalle-label'>Prioridad</p>
                        <span className='detalle-badge' style={{ backgroundColor: getPrioridadColor(tarea.prioridad) }}>
                            {tarea.prioridad}
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
