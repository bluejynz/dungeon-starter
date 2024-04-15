function createCharacter(props: {name: string, class: string, race: string}) {
    const newCharacter = {
        name: props.name,
        class: props.class,
        race: props.race,
    };

    saveCharacter(newCharacter);
}

function saveCharacter(character: { name: string; class: string, race: string }) {
    const characterString = JSON.stringify(character);
    localStorage.setItem("savedCharacter", characterString);
}

export { saveCharacter, createCharacter };
