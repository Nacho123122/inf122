'use client';
import style from './page.module.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
    const [nroClicks, setNumClicks] = useState(0);
    const click = () => {
      setNumClicks(nroClicks + 1);
    }
    const reiniciar = () => {
      setNumClicks(0);
    }
    return (
      <div className={style.App}>
        <div className={style["contenedor-principal"]}>
          <Contador nroClicks={nroClicks} />
          <div className={style['contendedor-botones']}>
            <Boton texto="Click" esBotonClick={true}
              funcionClick={click} />
            <Boton texto={style["Reiniciar"]} esBotonClick={false}
              funcionClick={reiniciar} />
          </div>
        </div>
      </div>
    );
  }
  
  export default App;