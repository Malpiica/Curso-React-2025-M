import ProductList from "./components/useEffects/ProductList";
import CardPlaceHolder from "./components/useEffectsCicloVida/CardPlaceHolder";

const App = () => {
  // const [contador, setContador] = useState(0);
  // const handleClick = () => {
  //   setContador((prevContador) => prevContador + 1);
  // };
  return (
    <div className="mx-auto bg-gray-200">
      <div className="text-3xl font-bold underline">Ejercicios básicos REACT</div>
      {/* <Contador />
      <hr className="mt-10" />
      <ContadorDoble />
      <hr className="mt-10" />
      <ContinuacionNumeros />
      <hr className="mt-10" />
      <RegistrarFormulario />
      <hr className="mt-10" />
      <GuitarHeroe /> */}
      {/* <hr className="mt-10" />
      <Padre /> */}
      {/* <hr className="mt-10" />
      <p>{contador}</p>
      <Padre2>
        <Hijo2>
          <Nieto2 handleClick={handleClick} />
        </Hijo2>
      </Padre2> */}
      {/* <hr className="mt-10" /> */}
      {/* <Timer /> */}
      {/* <CardPlaceHolder /> */}
      <ProductList />
    </div>
  );
};

export default App;
