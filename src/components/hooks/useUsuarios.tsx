import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../../interfaces/resResp";


export const useUsuarios = () => {

const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const japsRefPage = useRef(1);
    useEffect(() => {
        // llamar función de carga de usuarios.
        japsFnCargaUsuarios();
    }, []);
    const japsFnCargaUsuarios = async () => {
        const ficResponse = await
        // llamado de la API
        reqRespApi.get<ReqRespUsuarioListado>('/users', {
            params: {
                page: japsRefPage.current
            }
        })
        .then(resp=> {
            //console.log(resp);   
            //console.log(resp.data);
            //console.log(resp.data.data);
            //console.log(resp.data.data[0].first_name);
            //console.log(resp.data.data);
            if ( resp.data.data.length > 0 ) {
                setUsuarios(resp.data.data);
                japsRefPage.current ++;
            }
            else {
                alert('No hay mas registros');
            }
        })
        .catch(err => console.log(err))
    }
        //funciones
        const ficFnPaginaSiguiente = ()  => {
        }
        const ficFnPaginaAnterior = () => {
        }

    return{
        usuarios,
        //japsFnCargaUsuarios
        ficFnPaginaAnterior,
        ficFnPaginaSiguiente
    }
}