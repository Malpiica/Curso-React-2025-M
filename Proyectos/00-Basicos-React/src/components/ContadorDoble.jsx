import { useState } from "react";

function ContadorDoble() {
    const [friends, setFriends] = useState({ Juan: 0, Pedro: 0, Maria: 0 });
    const [promedio, setPromedio] = useState(0);

    function handleClick(nombre, valor) {
        setFriends((prevfriends) => {
            return {
                ...prevfriends,
                [nombre]: (prevfriends[nombre] || 0) + valor >= 0 ? (prevfriends[nombre] || 0) + valor : 0,
            };
        });
    }
    
    function calcularPromedio() {
        let suma = 0;
        for (let key in friends) {
            suma += friends[key];
        }

        setPromedio(suma / Object.keys(friends).length);
    }

    return (
        <>
            <h1 className="text-2xl bg-cyan-300 text-center py-4 font-bold">
                Contador de Amigos
            </h1>

            <div className="text-center mt-6 space-y-4">
                <div>
                    <span className="block mb-2">
                        Juan tiene <strong>{friends.Juan}</strong> amigos
                    </span>
                    <span className="block mb-2">
                        Maria tiene <strong>{friends.Maria}</strong> amigos
                    </span>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleClick("Juan", 1)}
                    >
                        Incrementar Juan
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleClick("Juan", -1)}
                    >
                        Decrementar Juan
                    </button>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleClick("Maria", 1)}
                    >
                        Incrementar Maria
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleClick("Maria", -1)}
                    >
                        Decrementar Maria
                    </button>
                </div>

                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={calcularPromedio}
                >
                    Calcular Promedio
                </button>

                <h1 className="text-lg font-bold">
                    El promedio de amigos total es de:{" "}
                    <strong>{promedio.toFixed(2)}</strong>
                </h1>
            </div>
        </>
    );
}

export default ContadorDoble;
