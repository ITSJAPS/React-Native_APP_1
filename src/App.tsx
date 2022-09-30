import React from 'react'
//comentamos el import tipos basicos para la 4.4
//import { TiposBasicos } from './typescript/TiposBasicos';

//LLamamos al componente Obtejetos Literales
//comentamos el import de 4.4
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';

//Objeto contador
//comentamos el objeto contador de componentes4.7
//import { Contador } from './components/Contador';

//objeto contador hook
//comentamos el imrpot de contadorhook 4.8
//import { ContadorHook } from './components/ContadorHook';

//useReduccer componente
//comentamos la importacion 4.9
//import { Login } from './components/Login';


//creamos el componente usuarios
import { Usuarios } from './components/Usuarios';

const App = () => {
  return (
    <div>
     
      <h1>Introduccion a Type Script con React</h1>
      <hr />
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Contador/>*/}
      {/*<ContadorHook/>*/}
      {/*<Login/>*/}
      {<Usuarios/>}
    </div>
 
  )
}
export default App;
