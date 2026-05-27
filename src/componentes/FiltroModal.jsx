import React, { useState } from 'react'
import Modal from './Modal'
import { MdFilterAlt } from 'react-icons/md'

export default function FiltroModal({ tareas, setTareasFiltradas }) {
    const [filtroAbierto, setFiltroAbierto] = useState(false)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')

    const categorias = ['Hogar', 'Trabajo', 'Colegio', 'Personal']

    const handleFiltro = (categoria) => {
        setCategoriaSeleccionada(categoria)
        if (categoria === '') {
            setTareasFiltradas(tareas)
        } else {
            const filtradas = tareas.filter(t => t.categoria === categoria)
            setTareasFiltradas(filtradas)
        }
    }

    const limpiarFiltro = () => {
        setCategoriaSeleccionada('')
        setTareasFiltradas(tareas)
    }

    return (
        <>
            <button
                className='btn-filtro'
                onClick={() => setFiltroAbierto(true)}
            >
                <MdFilterAlt size={20} />
                Filtrar
            </button>

            <Modal abierto={filtroAbierto} cerrar={() => setFiltroAbierto(false)}>
                <div className='filtro-contenedor'>
                    <h2>Filtrar</h2>

                    <div className='filtro-opciones'>
                        {categorias.map((categoria) => (
                            <button
                                key={categoria}
                                className={`filtro-opcion ${categoriaSeleccionada === categoria ? 'activo' : ''}`}
                                onClick={() => handleFiltro(categoria)}
                            >
                                {categoria}
                            </button>
                        ))}
                    </div>

                    <button
                        className='btn-limpiar-filtro'
                        onClick={limpiarFiltro}
                    >
                        Limpiar Filtro
                    </button>
                </div>
            </Modal>
        </>
    )
}