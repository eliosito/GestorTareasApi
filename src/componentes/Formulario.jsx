import React from 'react'
import useTarea from '../hooks/useTarea'
import axios from 'axios';

export default function Formulario() {

    const [tarea, setDatoTarea] = useTarea();

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = "https://api-tareas.ctpoba.edu.ar/api/tareas"
        
        const config = {
            headers: { Authorization: "48354750"}
        }

        axios.post(url,tarea, config)
        .then ((resp) => {
            console.log(resp);
            alert("Tarea guardada")
        })
        .catch((error) => {
            console.error(error)
            alert("Error al guardar")
        })
    }


    return (
<form onSubmit={handleSubmit}>
    <div className='formulario-contenedor'>
        <div className='formulario-grupo'>

            <input type="text" 
            placeholder='Nombre'
            onChange={(e) => setDatoTarea("nombre",e.target.value)}
            value={tarea.nombre}
            className='formulario-input'/>
        </div>
        <div className='formulario-grupo'>
            <textarea 
            placeholder='Descripcion'
            rows="6"
            onChange={(e) => setDatoTarea("descripcion",e.target.value)}
            value={tarea.descripcion}
            className='formulario-textarea'            
            ></textarea>
        </div>

        <div className='formulario-grupo'>
            <select className='formulario-select'
            onChange={(e) => setDatoTarea("categoria",e.target.value)}
            value={tarea.categoria}
            >
                <option value="" disabled selected>Categoría</option>
                <option value="Hogar">Hogar</option>
                <option value="Trabajo">Trabajo</option>
                <option value="Colegio">Colegio</option>
                <option value="Personal">Personal</option>
            </select>
        </div>

        <div className='formulario-grupo'>
            <div className='formulario-label'>Prioridad</div>

            <div className='prioridad-opciones'>


                <div className='radio-grupo'>

                    <input type="radio" id="alta" name="prioridad"  value="1"  onChange={(e) => setDatoTarea("prioridad",e.target.value)} checked={tarea.prioridad === "1"} />
                    <label htmlFor="alta">Alta</label>

                </div>
                <div className='radio-grupo'>

                    <input type="radio" id="media" name="prioridad" value="2" onChange={(e) => setDatoTarea("prioridad",e.target.value)} checked={tarea.prioridad === "2"}/>
                    <label htmlFor="media">Media</label>

                </div>
                <div className='radio-grupo'>

                    <input type="radio" id="baja" name="prioridad" value="3" onChange={(e) => setDatoTarea("prioridad",e.target.value)} checked={tarea.prioridad === "3"} />
                    <label htmlFor="baja">Baja</label>

                </div>
                
            </div>

        </div>

        <button type="submit" className='formulario-boton'>Guardar</button>


    </div>
    </form>
        
    )
}

