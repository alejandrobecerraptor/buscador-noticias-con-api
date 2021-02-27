import React,{useState} from 'react';

const useSelect = (stateInicial, opciones) => {

    //state del custom hook

    const [state, actualizarState] = useState('');

    const SelectNoticias = () => (
        <select className="browser-default" name="" id="">
            <option value="">Seleccione</option>
        </select>
    );

    return [state, SelectNoticias];
}
 
export default useSelect;