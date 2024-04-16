// import "@/components/dice/DiceStyle.css"
import Die1 from "@/components/dice/Die1";
import Die2 from "@/components/dice/Die2";
import Die3 from "@/components/dice/Die3";
import Die4 from "@/components/dice/Die4";
import Die5 from "@/components/dice/Die5";
import Die6 from "@/components/dice/Die6";
import {
    DieComponent,
    roll,
} from "@/functions/character/attributes/AttributesGenerationFun";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const dice: { [key: number]: DieComponent } = {
    1: Die1,
    2: Die2,
    3: Die3,
    4: Die4,
    5: Die5,
    6: Die6,
};

function DiceContainer() {
    const [diceRolls, setDiceRolls] = useState<number[]>([]);

    const handleRollClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setDiceRolls(roll(event.currentTarget));
    };

    useEffect(() => {}, [diceRolls]);

    return (
        <>
            <Button id="roll-dice" onClick={handleRollClick}>
                Roll dice x6
            </Button>
            <div id="dice-container" className="flex flex-row flex-wrap gap-10">
                {diceRolls.map((r, i) => {
                    const DieComponent = dice[r];
                    if (DieComponent) {
                        return <DieComponent key={i} />;
                    }
                    return null;
                })}
            </div>
        </>
    );
}

export default DiceContainer;
