import "./css/experiencia.css"
import { useEffect } from "react";
import VerticalLinearStepper from "../components/Stepper";

function Experiencia() {

    useEffect(()=>{
        document.querySelector('.container-experiencia').classList.add('show');
    })

    return (
        <div className="container-experiencia">
            <center>
                <h1 className="titulo-experiencia">Experiencia</h1>
                <VerticalLinearStepper></VerticalLinearStepper>
            </center>
        </div>
    );
}

export default Experiencia;
