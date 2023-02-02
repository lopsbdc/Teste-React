const OutroComponente = () => {

    const handleClick = () => {
        console.log("Clicou!");
    };

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de clique</button>
            <hr />
            <button onClick={() => console.log("ẗeste")}>Evento</button>
        </div>
    );
};

export default OutroComponente;