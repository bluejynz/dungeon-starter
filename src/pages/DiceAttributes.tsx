import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { roll } from "@/functions/character/attributes/AttributesGenerationFun";
import { useState } from "react";

function DiceAttributes() {
    const [diceRolls, setDiceRolls] = useState<Number[]>();

    const handleRollClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        roll(event.currentTarget);
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Atributos</CardTitle>
                    <CardDescription>
                        Role os dados 6x para podermos fazer a alocação de
                        pontos
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button id="roll-dice" onClick={handleRollClick}>Roll dice x6</Button>
                    <div id="dice-container"></div>
                </CardContent>
            </Card>
        </>
    );
}

export default DiceAttributes;
