import { useEffect, useState } from 'react'
import './App.css'
import Contenedor from './componentes/Contenedor'
import Formulario from './componentes/Formulario'
import Modal from './componentes/Modal'
import Pagina from './componentes/Pagina'

import axios from 'axios'

import { Router, Route, Switch } from 'wouter'
import Home from './componentes/Home'
import Header from './componentes/Header'
import Footer from './componentes/Footer'






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
                <Pagina/>
            </Route>
        </Switch>

      <Footer/>



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