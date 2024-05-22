import { useEffect, useState } from "react";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getDndAttributes } from "@/functions/dnd-api/DnDfuns";
import { IDnDResponse } from "@/interfaces/IDnDResponse";
import { loadDiceResults } from "@/functions/character/CharLocalStorageFun";
import AttributeRadioBtnList from "./AttributeRadioBtnList";

const FormSchema = z.object({
    charClass: z.string({
        required_error: "Por favor, selecione uma classe",
    }),
    charRace: z.string({
        required_error: "Por favor, selecione uma raça",
    }),
});

function AttributeContainer() {
    const [diceResults, setDiceResults] = useState<number[]>([]);
    const [attributeNames, setAttributeNames] = useState<IDnDResponse[]>([]);

    useEffect(() => {
        let rolls = loadDiceResults();
        if (rolls !== null) setDiceResults(rolls);

        getDndAttributes()
            .then((res) => {
                if (res && res.results) {
                    setAttributeNames(res.results);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    // const onSubmit = (data: z.infer<typeof FormSchema>) => {};

    return (
        <>
            <Form {...form}>
                <form
                    // onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    {attributeNames.map((a, i) => (
                        <AttributeRadioBtnList
                            diceResults={diceResults}
                            control={form.control}
                            formItemName={a.index}
                            key={i}
                        />
                    ))}

                    <Button type="submit">Próximo</Button>
                </form>
            </Form>
        </>
    );
}

export default AttributeContainer;
