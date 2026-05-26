import { useState } from "react"


export default function useTarea() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [estado, setEstado] = useState("")
    const [FechaCreacion, setFechaCreacion] = useState("")
    const [FechaVencimiento, setFechaVencimiento] = useState("")
    const [prioridad, setPrioridad] = useState("baja")
    const [seleccionado, setSeleccionado] = useState(false)

        const cambiarDato = (campo,valor) => {


            const opciones = {
                titulo : (valor) => setTitulo(valor),
                categoria : (valor) => setCategoria(valor),
                estado : (valor) => setEstado(valor),
                FechaCreacion : (valor) => setFechaCreacion(valor),
                FechaVencimiento: (valor) => setFechaVencimiento(valor),






            }
        }






  return (
    <div>useTarea</div>
  )
}
