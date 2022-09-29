import React from 'react'

//declaramos unas variables por usar
const AlNombre: string = "Alberto";
const AlApellidos: string = "Perez Soto"
const AlNumControl: number = 1840;
const AlNumControl2 = 1176;
const AlFechaReg: Date = new Date();
let AlExperiencia = 4;
let AlActivo: boolean = true;


//declaramos un arreglo en typeScrip 
let AlPasatiempos : string[] = ['Videogames', 'Atletismo', 'Biker', 'Cine'];

//damos el metodo push para agregar al arreglo
//AlPasatiempos.push(706);
//AlPasatiempos.push(true);

export const TiposBasicos = () => {
    //declaramos una variable default AlIdNombregit 
    let AlIdNombre: string | number = "Alberto";
    AlIdNombre=706;
    return (
        <div>
           <h3>Tipos basicos</h3>
           Alias:{AlIdNombre},
           <br />
           Nombre:{AlNombre}
           <br />
           Apellidos:{AlApellidos},
           <br />
           No.Control:{AlNumControl},
           <br />
           No.Control2{AlNumControl2},
           <br />
           Fecha de Registro:{AlFechaReg.toString()},
           <br />
           Experiencia en años:{AlExperiencia},
           <br />
           Estatus:{(AlActivo)?'Activo':'No Activo'}
           <br />
           Pasa tiempos:{AlPasatiempos}
        </div>
        
    )
    
}