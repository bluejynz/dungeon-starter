import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createCharacter } from "@/functions/CharCreator";
import { useNavigate } from "react-router-dom";


function CharCreator() {
    const navigate = useNavigate();
    
    function handleClickNext() {
        
        const nameInput = document.getElementById(
            "char-name"
        ) as HTMLInputElement;
        const classSelect = document.getElementById(
            "char-class"
        ) as HTMLButtonElement;
        const raceSelect = document.getElementById(
            "char-race"
        ) as HTMLButtonElement;
        console.log("peguei o botão", raceSelect);
        
        const charName = nameInput.value as string;
        const charClass = classSelect.querySelector('span')?.textContent as string;
        console.log("peguei a classe", charClass);
        const charRace = raceSelect.querySelector('span')?.textContent as string;
        
        createCharacter({ name: charName, class: charClass, race: charRace });
    
        navigate("roll-dice");
    }

    return (
        <>
            <Card className="w-[350px] m-auto">
                <CardHeader>
                    <CardTitle>Crie seu personagem</CardTitle>
                    <CardDescription>
                        Escolha o nome, a classe e a raça do seu personagem para
                        seguir para a próxima etapa
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="char-name">Nome do personagem:</Label>
                        <Input
                            type="text"
                            id="char-name"
                            placeholder="Digite o nome do seu personagem"
                        />
                    </div>

                    <Select id="char-class">
                        <SelectTrigger>
                            <SelectValue placeholder="Classe" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="warrior">Guerreiro</SelectItem>
                            <SelectItem value="mage">Mago</SelectItem>
                            <SelectItem value="ranger">Arqueiro</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select id="char-race">
                        <SelectTrigger>
                            <SelectValue placeholder="Raça" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="human">Humano</SelectItem>
                            <SelectItem value="elf">Elfo</SelectItem>
                            <SelectItem value="orc">Orc</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button onClick={handleClickNext}>Próximo</Button>
                </CardContent>
            </Card>
        </>
    );
}

export default CharCreator;
