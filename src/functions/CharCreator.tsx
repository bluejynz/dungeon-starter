import { useState } from "react";

// Função para criar o personagem
function createCharacter(props: {name: string, class: string, race: string}) {
    const [charName, setCharName] = useState<string>(props.name);
    const [charClass, setCharClass] = useState<string>(props.class);
    const [charRace, setCharRace] = useState<string>(props.race);

    // Verifica se o nome do personagem foi inserido
    if (charName.trim() === "") {
        alert("Por favor, insira um nome para o seu personagem.");
        return;
    }

    // Cria um objeto personagem com base na classe selecionada
    const newCharacter = {
        name: charName,
        class: charClass,
        race: charRace,
    };

    saveCharacter(newCharacter);
    alert(
        "Informações salvas. Agora vamos distribuir os pontos aos atributos."
    );
}

function saveCharacter(character: { name: string; class: string, race: string }) {
    const characterString = JSON.stringify(character);
    localStorage.setItem("savedCharacter", characterString);
}

export { saveCharacter, createCharacter };
