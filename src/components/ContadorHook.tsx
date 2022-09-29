import React from 'react'
import {useState} from 'react';

export const ContadorHook = () => {
    const [valor, setValor] = useState(0);

    const acumular=(numero:number)=>{
        setValor(valor+numero);
    }

    return (
        <div>
            <h3>Contador Hook: <small>{valor}</small></h3>
            <button className='JapsButton1'
                onClick={()=> acumular(1)}
            >
                Sumar (+1) 
            </button>
        &nbsp;
            <button className='JapsButton2'
                onClick={()=> acumular(-1)}
            >
                Restar (-1) 
            </button>

        </div>
    )
}