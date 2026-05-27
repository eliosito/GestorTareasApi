import React from 'react'

export default function Modal({abierto,cerrar,children}) {

    if (!abierto) return null;

    return (
        <div className='overlay'>
            <div className='modal'>

                <button onClick={cerrar}> X </button>

                {children}






            </div>



        </div>
        )
}

