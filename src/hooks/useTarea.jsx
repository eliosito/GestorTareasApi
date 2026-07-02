import { useState } from "react"


export default function useTarea() {

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("Hogar")
    const [estado, setEstado] = useState("en curso")
    const [prioridad, setPrioridad] = useState(3)
    const [eliminada, setEliminada] = useState(false)

    const cambiarDato = (campo, valor) => {


        const opciones = {
            nombre: (valor) => setNombre(valor),
            descripcion: (valor) => setDescripcion(valor),
            categoria: (valor) => setCategoria(valor),
            estado: (valor) => setEstado(valor),
            prioridad: (valor) => setPrioridad(valor)

        }
        opciones[campo](valor)
    }

    const limpiarFormulario = () => {
        setNombre("")
        setDescripcion("")
        setCategoria("Hogar")
        setEstado("en curso")
        setPrioridad(3)
        setEliminada(false)
    }

    return [
        { nombre, descripcion, categoria, estado, prioridad, eliminada },
        cambiarDato , limpiarFormulario
    ]

}
