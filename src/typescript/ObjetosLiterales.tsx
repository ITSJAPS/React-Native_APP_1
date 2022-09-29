import React from 'react'




//7.crear objeto persona
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion 
        
        /*
        {
        pais:'Mexico',
        estado:'Nayarit el mejor',
        ciudad:'Tepic',
        calle:'jacarandas',
        numero:53
    }*/
    
}

interface Direccion{
    pais:string,
    estado:string,
    ciudad:string,
    calle:String,
    numero:number
}




export const ObjetosLiterales = () => {
    
    const persona: Persona = {
        nombreCompleto: 'Jorge Alberto',
        edad: 30,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            calle: 'jacarandas',
            numero:53
        }
    }

    return (
        <div>
             <h3>Objetos Literales</h3>
            
           <pre>
            {JSON.stringify(persona,null,2)}
           </pre>

        </div>
    )
    
}
