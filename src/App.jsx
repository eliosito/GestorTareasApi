import { useEffect, useState } from 'react'
import './App.css'
import Contenedor from './componentes/Contenedor'
import Formulario from './componentes/Formulario'
import Modal from './componentes/Modal'

import axios from 'axios'

import { Router, Route, Switch } from 'wouter'
import Home from './componentes/Home'
import Header from './componentes/Header'






function App() {

  useEffect(()=> {
    const url = "https://api-tareas.ctpoba.edu.ar/api";
    axios.get(url)
    .then ((resp) => {
      console.log(resp)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    
      <div>
        <Header/>

        <Switch>
            <Route path="/" component={Home} />
            <Route path="/formulario" component={Formulario} />
            <Route path="/contenedor" component={Contenedor} />

            <Route>
                <h1>404 - Página no encontrada</h1>
            </Route>
        </Switch>

      



      </div>





    
  )
}

export default App
{/*     <Modal
    abierto={abierto}
    cerrar={() => setAbierto(false)}
    >

      <Formulario
      guardar={(tarea) => guardar(tarea)}
      />


    </Modal>

    <Contenedor
    tareas={tareas}
    setTareas={setTareas}
    eliminar={eliminarSeleccionadas}
    onAbrirFormulario={() => setAbierto(true)} 
    

    /> */}