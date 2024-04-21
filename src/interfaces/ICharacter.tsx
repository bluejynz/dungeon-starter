interface IAttribute {
    name: string;
    value: number;
}

export interface ICharacter {
    name: string;
    class: string;
    race: string;
    diceResults?: Array<number>;
    attributes?: Array<IAttribute>;
}
