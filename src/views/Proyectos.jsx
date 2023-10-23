import "./css/proyectos.css"
import { useEffect } from "react";

function Proyectos() {

    useEffect(()=>{
        document.querySelector('.container-inicio').classList.add('show');
    })

    return (
        <div className="container-inicio">
            <h1>Proyectos</h1>
        </div>
    );
}

export default Proyectos;
