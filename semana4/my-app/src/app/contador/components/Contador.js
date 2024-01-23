import React from 'react';
import style from './Contador.module.css';

function Contador({ nroClicks }) {
    return (
        <div className={style.contador}>{nroClicks}
            
        </div>
    );
}

export default Contador;