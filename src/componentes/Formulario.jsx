import React from 'react'
import useTarea from '../hooks/useTarea'

export default function Formulario() {

    const [tarea, setDatoTarea] = useTarea();

    const handleSubmit = (e) => {
        e.preventDefault();

        const fecha = new Date().toLocaleDateString('es-ES')

        
        guardar({
            ...tarea,
            FechaCreacion: fecha

        })
    }


    return (
<form onSubmit={handleSubmit}>
    <div className='formulario-contenedor'>
        <div className='formulario-grupo'>

            <input type="text" 
            placeholder='Titulo'
            onChange={(e) => setDatoTarea("titulo",e.target.value)}
            value={tarea.titulo}
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

                    <input type="radio" id="alta" name="prioridad"  value="Alta"  onChange={(e) => setDatoTarea("prioridad",e.target.value)} checked={tarea.prioridad === "Alta"} />
                    <label htmlFor="alta">Alta</label>

                </div>
                <div className='radio-grupo'>

                    <input type="radio" id="media" name="prioridad" value="Media" onChange={(e) => setDatoTarea("prioridad",e.target.value)} checked={tarea.prioridad === "Media"}/>
                    <label htmlFor="media">Media</label>

                </div>
                <div className='radio-grupo'>

                    <input type="radio" id="baja" name="prioridad" value="Baja" onChange={(e) => setDatoTarea("prioridad",e.target.value)} checked={tarea.prioridad === "Baja"} />
                    <label htmlFor="baja">Baja</label>

                </div>
                
            </div>

        </div>

        <div className='formulario-grupo'>
            <input 
            type="date" 
            className='formulario-input'
            onChange={(e) => setDatoTarea("FechaVencimiento",e.target.value)}
            value={tarea.FechaVencimiento}
            placeholder='DD / MM / AAAA'
            />
        </div>
        <button type="submit" className='formulario-boton'>Guardar</button>


    </div>
    </form>
        
    )
}

