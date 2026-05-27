import React from 'react'
import useTarea from '../hooks/useTarea'

export default function Formulario() {

    const [tarea, setDatoTarea] = useTarea();


    return (
    <div>
        <input 
        type="text" 
        placeholder='Titulo'
        
        />

        <textarea placeholder='Descripcion' rows="6" cols="30"> </textarea>

        <select
        
        >
            <option value="" disabled>Seleccionar Categoria</option>
            <option value="Hogar">Hogar</option>
            <option value="Trabajo">Trabajo</option>
        </select>

        

    </div>
    )
}
