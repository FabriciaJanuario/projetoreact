import { useState } from 'react';

export default function Contador() {
    const [ counter, setCounter] = useState(0);

    function clicar() {
        setCounter(counter + 1);
    }

    return(
        <div onClick={clicar}>
            <button>Clicou {counter} vezes</button>
        </div>
    );
}

