const List = () => {

    const items = [
        {
            id: 1,
            nome: "A",
        },

        {
            id: 2,
            nome: "B",
        },

        {
            id: 3,
            nome: "C",
        },
    ];

    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>{item.nome} - {item.id}</p>
            ))}
        </div>
    );
};

export default List;