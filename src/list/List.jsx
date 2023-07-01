import React from 'react'
// Tenemos que importar el arreglo 
import frameworkList from './item'
// Importamos tambien el componente de la vista de la lista
import ListView from './ListView'
import { useState } from 'react'

function List() {
  
    let [items, setItems] = useState(frameworkList)
    
    function filterItems(searchPattern){
      if (searchPattern === '') {
          setItems(frameworkList)
          // si no escribio nada devuelve la lista completa 
      }else {
          // se crea un arreglo nuevo con los items filtrado
          let newItems = filterItemsBySearchPattern(searchPattern)
          setItems(newItems) /* Aca se actauliza el set con los items filtrados */
  
  
          // si escribe algo usa el parametro y creamos otra funcion para poder buscar y delegamos la responsabilidad 
      }
    }
    function filterItemsBySearchPattern(searchPattern){
      // primeros definimos los items filtrados
      let filterItems = frameworkList.map( item =>item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null)
      // se usa .filter y .includes para filtrar y ver si incluye eso
    //   Dejamos de usar filter para poder optimizar el arreglo y que no se recargue cuando buscamos esto nos lleva a hacer un map , si es verdadero el arreglo sino el null
      // El toLowerCase sirve para pasar todo a minuscula ya q nos es indistinto si es mayuscula o minuscala ahora  
      return filterItems
      // retornamos el arreglo filtrado
  }
    return (
    <ListView elements={items} funcFilterItems={filterItems} />
  )
}

export default List