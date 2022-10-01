import { useEffect, useState } from "react";
import { reqRespApi } from '../api/reqRes';
import { ReqRespUsuarioListado, Usuario } from '../interfaces/resResp';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        //FIC: llamado de la API
        reqRespApi.get<ReqRespUsuarioListado>('/users')
        .then(resp=> {
              //  console.log(resp.data.data[0].first_name);
              //  console.log(resp.data.data)
              //  console.log(resp.data.data[0].email)
              //  console.log(resp.data.data)
              //setUsuarios(resp.data.data);
            })
        .catch(err => console.log(err))
        }, [])
    const renderItem = (usuario: Usuario) => {
    return (
        <tr key={usuario.id.toString()}>
            <h3>Usuarios</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <td>
                            <img
                                src={ usuario.avatar }
                                alt={ usuario.first_name }
                                style={{
                                    width: 50,
                                    borderRadius: 100
                                }}
                            >
                            </img>
                        </td>
                        <th>
                        { usuario.first_name } { usuario.last_name }
                        </th>
                        <th>
                        { usuario.email }
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(FicArgUsuario => renderItem(FicArgUsuario))
                    }
                </tbody>
            </table>
        </tr>
    )
    }
}