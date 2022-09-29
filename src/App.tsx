import React from 'react'
//comentamos el import tipos basicos para la 4.4
//import { TiposBasicos } from './typescript/TiposBasicos';

//LLamamos al componente Obtejetos Literales
//comentamos el import de 4.4
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';

//Objeto contador
import { Contador } from './components/Contador';

const App = () => {
  return (
    <div>
     
      <h1>Introduccion a Type Script con React</h1>
      <hr />
      {/*<TiposBasicos/>*/}
      {/*<ObjetosLiterales/>*/}
      {<Contador/>}
    </div>
 
  )
}
export default App;
