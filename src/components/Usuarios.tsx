import { useEffect, useRef, useState } from "react";
import { reqRespApi } from '../api/reqRes';
import { ReqRespUsuarioListado, Usuario } from '../interfaces/resResp';
import { useUsuarios } from './hooks/useUsuarios';

export const Usuarios = () => {

    const [usuario, setUsuarios] = useState<Usuario[]>([]);
    const { usuarios, ficFnPaginaSiguiente, ficFnPaginaAnterior} = useUsuarios();

    const japsRefPage = useRef(0);

    useEffect(() => {
        
        japsFNCargaUsuarios();
         }, []);

    const japsFNCargaUsuarios = async()=>{
        const japsResponse= await

        reqRespApi.get<ReqRespUsuarioListado>('/users', {
            params: {
                page: japsRefPage.current
            }
        }).then(resp=> {
               //  console.log(resp.data.data[0].first_name);
               //  console.log(resp.data.data)
               //  console.log(resp.data.data[0].email)
               //  console.log(resp.data.data)

               if(resp.data.data.length>0){
                setUsuarios(resp.data.data);
                japsRefPage.current++;
               }
               else{
                alert('Son todos los registros')
               }
              
             })
         .catch(err => console.log(err))
    }



   


    const renderItem = (usuario: Usuario) => {
        return (
            <tr key = {usuario.id.toString()}>
                <td>
                    <img src={usuario.avatar} alt = {usuario.first_name}
                    style = {{
                        width: 50,
                        borderRadius: 100
                    }}
                    ></img>
                </td>
                <td>
                    {usuario.first_name} {usuario.last_name}
                </td>
                <td>
                    {usuario.email}
                </td>
            </tr>
            
        )
    }


    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table">
                    <thead>
                          <tr>
                                <th>
                                    Avatar
                                </th>
                                <th>
                                    Nombre
                                </th>
                                 <th>
                                    email
                                </th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                        usuarios.map((japsArgUsuario: Usuario) => renderItem(japsArgUsuario))
                    }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                onClick= { japsFnCargaUsuarios }
                >
                Anterior       
            </button>
            &nbsp;           
            <button
                className="btn btn-primary"
                onClick= { japsFnCargaUsuarios }
                >
                Siguiente       
            </button>
        </>
    )
    
}