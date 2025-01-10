import { useState } from "react"

const Contador = () => {
//Espacio para los hooks
const [total, setTotal] = useState(0)

//Espacio para las funciones

function handleClick (num){

    setTotal(total + num)
}

  return (
    <>
    <h1> Contador en React</h1>
    <h1> {total}</h1>
    <button onClick={()=>handleClick(1)}>Incrementar</button>
    <button onClick={()=>handleClick(-1)}>Decrementar</button>
</>
  )
}

export default Contador
