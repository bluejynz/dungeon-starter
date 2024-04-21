import { useEffect, useState } from "react";
import DiceContainer from "@/components/dice/DiceContainer";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function DiceAttributes() {
    const navigate = useNavigate();
    const [diceResults, setDiceResults] = useState<number[]>([]);
    useEffect(() => {}, [diceResults]);

    const handleNextBtn = () => {
        navigate("/char-creation/allocate-points");
    };

    return (
        <>
            <Card className="w-[350px] m-auto">
                <CardHeader>
                    <CardTitle>Rolagem de dados</CardTitle>
                    {diceResults.length < 6 ? (
                        <CardDescription>
                            Role os dados 6x para podermos fazer a alocação de
                            pontos
                        </CardDescription>
                    ) : (
                        <div>
                            <CardDescription>
                                Os dados foram rolados. Agora podemos prosseguir
                                com a alocação de pontos.
                            </CardDescription>
                            <Button onClick={handleNextBtn} className="mt-4">
                                Próximo
                            </Button>
                        </div>
                    )}
                </CardHeader>
                <CardContent>
                    <DiceContainer
                        diceResults={diceResults}
                        setDiceResults={setDiceResults}
                    />
                </CardContent>
            </Card>
        </>
    );
}

export default DiceAttributes;
