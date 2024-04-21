import AttributeContainer from "@/components/attributes/AttributeContainer";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function PointsAllocation() {

    return (
        <>
            <Card className="w-[350px] m-auto">
                <CardHeader>
                    <CardTitle>Alocação de pontos de atributos</CardTitle>
                    <CardDescription>
                        Com o valor de cada rolagem você pode agora escolher um
                        valor pra cada atributo
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AttributeContainer />
                </CardContent>
            </Card>
        </>
    );
}

export default PointsAllocation;
