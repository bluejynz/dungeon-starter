import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "@/functions/CharCreatorFun";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
    charName: z
        .string({
            required_error: "Por favor, digite um nome pro seu personagem",
        })
        .min(2, {
            message: "O nome precisa ter pelo menos 2 letras.",
        }),
    charClass: z.string({
        required_error: "Por favor, selecione uma classe",
    }),
    charRace: z.string({
        required_error: "Por favor, selecione uma raça",
    }),
});

function CharCreator() {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            charName: "",
        },
    });

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        console.log(data);

        createCharacter({
            name: data.charName,
            class: data.charClass,
            race: data.charRace,
        });

        navigate("dice-rolls");
    };

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

                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-4"
                        >
                            <FormField
                                control={form.control}
                                name="charName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="char-name">
                                            Nome do personagem:
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            id="char-name"
                                            placeholder="Digite o nome do seu personagem"
                                            {...field}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="charClass"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Classe" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Warrior">
                                                    Guerreiro
                                                </SelectItem>
                                                <SelectItem value="Mage">
                                                    Mago
                                                </SelectItem>
                                                <SelectItem value="Ranger">
                                                    Arqueiro
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="charRace"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Raça" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Human">
                                                    Humano
                                                </SelectItem>
                                                <SelectItem value="Elf">
                                                    Elfo
                                                </SelectItem>
                                                <SelectItem value="Orc">
                                                    Orc
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit">Próximo</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
}

export default CharCreator;
