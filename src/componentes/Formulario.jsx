import React from 'react'
import useTarea from '../hooks/useTarea'
import axios from 'axios';

export default function Formulario() {

    const [tarea, setDatoTarea, limpiarFormulario] = useTarea();

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = "https://api-tareas.ctpoba.edu.ar/api/tareas"

        const config = {
            headers: { Authorization: "48354750" }
        }

        axios.post(url, tarea, config)
            .then((resp) => {
                console.log(resp);
                alert("Tarea guardada")
                limpiarFormulario();
            })
            .catch((error) => {
                console.error(error)
                alert("Error al guardar")
            })


    }


    return (
        <form onSubmit={handleSubmit} className="formulario-raiz">
            <div className='formulario-contenedor-imagen'>

                <div className='columna-izquierda'>
                    <div className='formulario-grupo'>
                        <label className='formulario-label'>Titulo</label>
                        <input type="text"
                            onChange={(e) => setDatoTarea("nombre", e.target.value)}
                            value={tarea.nombre}
                            className='formulario-input'
                            required 
                            maxlength="30"
                        />
                    </div>

                    <div className='formulario-grupo'>
                        <label className='formulario-label'>Categoria</label>
                        <select className='formulario-select'
                            onChange={(e) => setDatoTarea("categoria", e.target.value)}
                            value={tarea.categoria}
                        >
                            <option value="" disabled selected></option>
                            <option value="Hogar">Hogar</option>
                            <option value="Trabajo">Trabajo</option>
                            <option value="Colegio">Colegio</option>
                            <option value="Personal">Personal</option>
                        </select>
                    </div>

                    <div className='formulario-grupo'>
                        <label className='formulario-label'>Prioridad</label>
                        <div className='prioridad-opciones-imagen'>
                            <div className='radio-grupo-imagen'>
                                <input type="radio" id="alta" name="prioridad" value="1" onChange={(e) => setDatoTarea("prioridad", e.target.value)} checked={tarea.prioridad === "1"} />
                                <label htmlFor="alta" className="text-alta">Alta</label>
                            </div>
                            <div className='radio-grupo-imagen'>
                                <input type="radio" id="media" name="prioridad" value="2" onChange={(e) => setDatoTarea("prioridad", e.target.value)} checked={tarea.prioridad === "2"} />
                                <label htmlFor="media" className="text-media">Media</label>
                            </div>
                            <div className='radio-grupo-imagen'>
                                <input type="radio" id="baja" name="prioridad" value="3" onChange={(e) => setDatoTarea("prioridad", e.target.value)} checked={tarea.prioridad === "3"} />
                                <label htmlFor="baja" className="text-baja">Baja</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='columna-derecha'>


                    <div className='formulario-grupo grupo-textarea-full'>
                        <label className='formulario-label'>Descripcion de tarea</label>
                        <textarea
                            onChange={(e) => setDatoTarea("descripcion", e.target.value)}
                            value={tarea.descripcion}
                            className='formulario-textarea-imagen'
                        ></textarea>
                    </div>

                    <div className='contenedor-boton-guardar'>
                        <button type="submit" className='formulario-boton-imagen'>Guardar</button>
                    </div>
                </div>

            </div>
        </form>
    )
}

