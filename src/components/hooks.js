import { useState } from "react";

const Hooks = () => {
    
    let idade = 30

    const [novaidade, setnovaidade] = useState()

    const trocaidade = () => {
        setnovaidade(45);
    };

    return (
        <div>
            <p>Idade: {novaidade}</p>
            <button onClick={trocaidade}> Mudar idade </button> 
        </div>
    );
};

export default Hooks;