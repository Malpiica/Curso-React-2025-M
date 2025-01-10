import { useState } from 'react'

function ContinuacionNumeros() {
    const [numbers, setNumbers] = useState([5,3,4,2,1])


    //Crea una funcion que añada el numero siguiente a mi array de numeros al ultimo numero ( ordenando los numeros)

    function addNextNumber (){
        const maxNumber = Math.max(...numbers);
        
    }
  return (
  <>
  <div>
    <button className=' bg-slate-400 rounded mb-2 mx-2'>Añade el siguiente numero</button>
  </div>
  </>
  )
}



export default ContinuacionNumeros
