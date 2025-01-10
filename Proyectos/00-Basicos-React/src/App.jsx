import Contador from "./components/Contador"
import ContadorDoble from "./components/ContadorDoble"

const App = () => {
    return (
        <>
        <div className = "text-3xl font-bold underline">Hola mundo</div>
        <Contador />
        <br></br>
        <ContadorDoble></ContadorDoble>
        </>
    )
}

export default App