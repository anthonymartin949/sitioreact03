import React, {useState, Fragment} from 'react';

const Matriz = () => {
    const [lista, setLista] = useState([10,20,30,44,50]);   //matriz de numeros

    return (
        <Fragment>
            <h4>Componente 8. Varias formas de lectura de una matriz</h4>

            <h1 style={{backgroundColor:'yelow'}}>1. Lectura ("doc" es cualquier variable) sin html</h1>
            {   lista.map((doc) => doc )}
            <br/>

            <h1>2. Lectura con html</h1>
            {   lista.map((item) => <span> {item} </span>)}

            <h1>3. Lectura al indice y su valor</h1>
            {   lista.map((valor, indice) => <p> {indice} / {valor} </p> ) }

            <h1>4. Lectura al indice y su valor</h1>
            {
                lista.push(100),    //Agregando un valor a matriz inicial
                lista.map((valor, indice) => <p>  {indice} / {valor} </p>)
            }
            <br/>
            <h1>5. Lectura a donde se asigne "Indice" a "p" osea al parrafo </h1>
            {
                lista.map((xValor, xIndice) =>
                    <p indice_de_p = {xIndice} >
                        {xIndice} - {xValor}
                    </p>
                )
            }
            <br/>
        </Fragment>
    );
}
export default Matriz;