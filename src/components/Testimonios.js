import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-tesminio' 
            src={require(`../imagenes/${props.imagen}.png`)}
            alt='messi'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre} </strong>{props.apellido}</p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.equipo}</strong></p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    )
}

export default Testimonio;