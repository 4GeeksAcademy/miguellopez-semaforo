import React, { useState, useEffect } from "react";

const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");
    const [purpleActive, setPurpleActive] = useState(false);
    const [phrase, setPhrase] = useState("");

    useEffect(() => {
        // Actualizar la frase según el color seleccionado
        switch (selectedColor) {
            case "green":
                setPhrase("La vida te da señales, ¡y esta es tu oportunidad de avanzar!");
                break;
            case "yellow":
                setPhrase("La precaución es la clave para un viaje seguro.");
                break;
            case "red":
                setPhrase("¡Detente, respira y reflexiona sobre tu próximo paso!");
                break;
            case "purple":
                setPhrase("Incluso en la oscuridad, hay destellos de esperanza.");
                break;
            default:
                setPhrase("");
        }
    }, [selectedColor]); // Ejecutar el efecto cuando selectedColor cambia

    const toggleColor = () => {
        if (selectedColor === "red") {
            setSelectedColor("yellow");
        } else if (selectedColor === "yellow") {
            setSelectedColor("green");
        } else if (selectedColor === "green") {
            setSelectedColor("purple");
        } else {
            setSelectedColor("red");
        }
    };

    const togglePurple = () => {
        setPurpleActive(!purpleActive);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="semaforo">
                        <div 
                            onClick={() => setSelectedColor("red")}
                            className={"light red" + (selectedColor === "red" ? " glow" : "")}>
                        </div>
                        <div 
                            onClick={() => setSelectedColor("yellow")}
                            className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}>
                        </div>
                        <div
                            onClick={() => setSelectedColor("green")}
                            className={"light green" + (selectedColor === "green" ? " glow" : "")}>
                        </div>
                        {purpleActive && (
                            <div
                                onClick={() => setSelectedColor("purple")}
                                className={"light purple" + (selectedColor === "purple" ? " glow" : "")}>
                            </div>
                        )}
                        <div>
                            <button className="boton1" onClick={toggleColor}>CAMBIAR COLOR</button>
                        </div>
                        <div>
                            <button className="boton2" onClick={togglePurple}>
                                {purpleActive ? "DESACTIVAR PURPURA" : "ACTIVAR PURPURA"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="frase frase-grande"> 
                        <p>{phrase}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;