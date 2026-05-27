import React, { useState } from 'react'
import Modal from './Modal'
import { MdFilterAlt, MdApartment, MdWork, MdHome, MdPerson } from 'react-icons/md'

export default function FiltroModal({ tareas, setTareasFiltradas, setFiltroActivo }) {
    const [filtroAbierto, setFiltroAbierto] = useState(false)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')

    const categoriasConIconos = [
        { nombre: 'Hogar', icono: MdHome },
        { nombre: 'Trabajo', icono: MdWork },
        { nombre: 'Colegio', icono: MdApartment },
        { nombre: 'Personal', icono: MdPerson }
    ]

    const handleFiltro = (categoria) => {
        setCategoriaSeleccionada(categoria)
        setFiltroActivo(categoria)  
        if (categoria === '') {
            setTareasFiltradas(tareas)
        } else {
            const filtradas = tareas.filter(t => t.categoria === categoria)
            setTareasFiltradas(filtradas)
        }
    }

    const limpiarFiltro = () => {
        setCategoriaSeleccionada('')
        setFiltroActivo('') 
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
                        {categoriasConIconos.map(({ nombre, icono: Icono }) => (
                            <button
                                key={nombre}
                                className={`filtro-opcion ${categoriaSeleccionada === nombre ? 'activo' : ''}`}
                                onClick={() => handleFiltro(nombre)}
                            >
                                <Icono size={20} />
                                {nombre}
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