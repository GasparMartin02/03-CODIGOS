
const ButtonsNav = (message, nameButton, data, functionNew) => {
    const {name, lastName} = data;

    return(
        <div>
            <button onClick={() => despedirse(message)}>
                {nameButton}
            </button>
            <h3>Info persona</h3>
            <h4>Nombre:{name}</h4>
            <h4>Nombre:{lastName}</h4>
        </div>
    )
};

export default ButtonsNav;