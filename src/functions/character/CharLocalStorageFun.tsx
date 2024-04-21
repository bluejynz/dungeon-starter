import { ICharacter } from "@/interfaces/ICharacter";

function createCharacter(props: { name: string; class: string; race: string }) {
    const newCharacter = {
        name: props.name,
        class: props.class,
        race: props.race,
    };

    saveCharacter(newCharacter);
}

function saveCharacter(character: ICharacter) {
    const characterString = JSON.stringify(character);
    localStorage.setItem("savedCharacter", characterString);
}

function loadCharacter() {
    const characterString = localStorage.getItem("savedCharacter");
    if (characterString) {
        const character = JSON.parse(characterString);
        console.log("Personagem carregado:", character);
        return character;
    } else {
        console.log("Nenhum personagem salvo encontrado.");
        return null;
    }
}

function loadDiceResults() {
    const characterString = localStorage.getItem("savedCharacter");
    if (characterString) {
        const character = JSON.parse(characterString);
        if(character.diceResults) {
            return JSON.parse(character.diceResults);
        } else {
            console.log("Resultado de dados não encontrado.");
            return null;
        }
    } else {
        console.log("Nenhum personagem salvo encontrado.");
        return null;
    }
}

export { createCharacter, saveCharacter, loadCharacter, loadDiceResults };
