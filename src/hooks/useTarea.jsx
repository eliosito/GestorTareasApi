import { useState } from "react"


export default function useTarea() {

    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("Hogar")
    const [estado, setEstado] = useState("Pendiente")
    const [FechaCreacion, setFechaCreacion] = useState("")
    const [FechaVencimiento, setFechaVencimiento] = useState("-")
    const [prioridad, setPrioridad] = useState("baja")
    const [seleccionado, setSeleccionado] = useState(false)

        const cambiarDato = (campo,valor) => {


            const opciones = {
                titulo : (valor) => setTitulo(valor),
                descripcion: (valor) =>  setDescripcion(valor),
                categoria : (valor) => setCategoria(valor),
                estado : (valor) => setEstado(valor),
                FechaCreacion : (valor) => setFechaCreacion(valor),
                FechaVencimiento: (valor) => setFechaVencimiento(valor),
                prioridad: (valor) => setPrioridad(valor)
                
            }
            opciones[campo](valor)
        }

    return [
        {titulo, descripcion, categoria , estado, FechaCreacion , FechaVencimiento, prioridad, seleccionado},
        cambiarDato
    ]
    
}
