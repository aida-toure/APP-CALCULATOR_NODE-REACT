import io from "socket.io-client"
import '../style/Calculator.css'
import {useEffect, useState} from "react";

const socket = io("http://localhost:8000");

function Calculator() {
    const [buttons] = useState(["C", "( )","%", "÷", "7", "8","9","×", "4","5","6","-","1","2","3","+","+/-","0", ",", "⬅"]);
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        socket.emit("calculate", operation)
        return () => {
            socket.off("calculate");
        }
    }, [operation]);

    useEffect(() => {
        socket.on("result", (result) => {
            setResult(result);
        })
    })


    const calculate = (value) => {
        if (value === "C"){
            setOperation("");
        }else if(value === "÷"){
            setOperation(operation + "/");
        }else if(value === "×"){
            setOperation(operation + "*");
        }else if(value === ","){
            value = "."
            setOperation(operation + value);
        }else if(value === "+/-"){
            value = "(-"
            setOperation(operation + value);
        }else if(value === "( )"){
            let exists = false;
            for (let value of operation.split("").reverse()) {
                if (value === "("){
                    setOperation(operation + ")");
                    exists = true;
                    break
                }else if(value === ")"){
                    setOperation(operation + "(");
                    exists = true;
                    break
                }
            }
            if (!exists){
                setOperation(operation + "(");
            }
        }else{
            setOperation(operation + value);
        }
    }

    return (
        <main>
            <section id="calculator">
                <div id="screen">{operation}</div>
                <div id="input">
                    {buttons.map((button, index) => (
                        <button key={index} id={button} className="buttons" onClick={ () => calculate(button)}>{button}</button>
                    ))}
                </div>
            </section>
            <section id="response">
                <div id="illustration"></div>
                <div id="output">{result}</div>
            </section>
        </main>
    )
}

export default Calculator;