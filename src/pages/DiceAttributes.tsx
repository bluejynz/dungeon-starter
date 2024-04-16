import DiceContainer from "@/components/dice/DiceContainer";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function DiceAttributes() {

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
                    <DiceContainer />
                </CardContent>
            </Card>
        </>
    );
}

export default DiceAttributes;
