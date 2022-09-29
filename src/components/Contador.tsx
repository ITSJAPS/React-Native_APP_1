import React from 'react'
import {useState} from 'react';

export const Contador = () => {
    const [valor, setValor] = useState(0);

    return (
        <div>
            <h3>Contador: <small></small></h3>
            <button className='JapsButton1'>Sumar (+1) </button>
        &nbsp;
            <button className='JapsButton2'>Restar (-1) </button>

        </div>
    )
}