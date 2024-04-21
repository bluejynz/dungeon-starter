import Die1 from "@/components/dice/Die1";
import Die2 from "@/components/dice/Die2";
import Die3 from "@/components/dice/Die3";
import Die4 from "@/components/dice/Die4";
import Die5 from "@/components/dice/Die5";
import Die6 from "@/components/dice/Die6";
import {
    DieComponent,
    getIndexOfMinorValue,
    roll,
} from "@/functions/character/attributes/AttributesGenerationFun";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../ui/button";

const dice: { [key: number]: DieComponent } = {
    1: Die1,
    2: Die2,
    3: Die3,
    4: Die4,
    5: Die5,
    6: Die6,
};

interface IDiceContainer {
    diceResults: number[];
    setDiceResults: Dispatch<SetStateAction<number[]>>;
  }

function DiceContainer( props: IDiceContainer) {
    const [diceRolls, setDiceRolls] = useState<number[]>([]);
    const [minorIndex, setMinorIndex] = useState<number>();
    // const [diceResults, setDiceResults] = useState<number[]>([]);

    const handleRollClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setDiceRolls(roll(event.currentTarget));
    };

    useEffect(() => {
        setMinorIndex(getIndexOfMinorValue(diceRolls));
        const savedChar = JSON.parse(localStorage.savedCharacter);
        if (savedChar.diceResults) {
            props.setDiceResults(JSON.parse(savedChar.diceResults));
        }
    }, [diceRolls]);

    return (
        <>
            {(!JSON.parse(localStorage.savedCharacter).diceResults ||
                props.diceResults.length < 6) && (
                <Button id="roll-dice" onClick={handleRollClick}>
                    Roll dice x{6 - props.diceResults.length}
                </Button>
            )}

            <div id="dice-container" className="flex flex-row flex-wrap gap-10">
                {diceRolls.map((r, i) => {
                    const DieComponent = dice[r];
                    if (DieComponent) {
                        if (i === minorIndex) {
                            return (
                                <DieComponent
                                    minor={true}
                                    key={`${r}-${Math.random() * 50}-${i}-${
                                        Math.random() * 50
                                    }`}
                                />
                            );
                        } else {
                            return (
                                <DieComponent
                                    key={`${r}-${Math.random() * 50}-${i}-${
                                        Math.random() * 50
                                    }`}
                                />
                            );
                        }
                    }
                    return null;
                })}
            </div>
        </>
    );
}

export default DiceContainer;
