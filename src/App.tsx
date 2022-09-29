import React from 'react'
//comentamos el import tipos basicos para la 4.4
//import { TiposBasicos } from './typescript/TiposBasicos';

//LLamamos al componente Obtejetos Literales
import { ObjetosLiterales } from './typescript/ObjetosLiterales';

const App = () => {
  return (
    <div>
     
      <h1>Introduccion a Type Script con React</h1>
      <hr />
      {/*<TiposBasicos/>*/}
      <ObjetosLiterales/>
    </div>
 
  )
}
export default App;
