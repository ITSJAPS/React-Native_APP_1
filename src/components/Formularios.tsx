import { useState } from "react"

export const Formularios = () => {

    const[formulario,setformularios]= useState({
        email:'test@test.com',
        password:'123456'
    })
    return (
        <>
            <h3>
                Formulario
            </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={formulario.email}
            ></input>
            <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={formulario.password}
            ></input>
        </>
    )
}