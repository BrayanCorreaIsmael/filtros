// Este es un componente de presentacion, toda la info tiene que venir por prop
import React from 'react'
// elements es la prop donde se va a guardar la variable
import { useState } from 'react'



function ListView({elements, funcFilterItems}) {
    
  return (
    <div>
        <input type="text" onChange={ev => funcFilterItems(ev.target.value)} />
        <ul>

        {
             /* Esta linea lo que hace es convertir de arreglo con string a elementos de react ['Angular','React'] a [<p>Angular</p>,<p>React</p>]*/
            // elements.map(nombre => <li>{nombre}</li>) 
            // La key es necesaria que no se modifique ya que si lo hace se recargan los componentes
           
            elements.map((nombre,index) => nombre && <li key={index}> {nombre} </li>)
            // usamos el index para que se mantega constante con los indeces de los arreglos y el condicional para si coincide el nombre y el indice(siempre va a coincidir) se muestra

        }
        </ul>
    </div>
  )
}

export default ListView