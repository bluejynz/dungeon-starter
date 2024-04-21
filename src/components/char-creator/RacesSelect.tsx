import SelectFromArray from "./SelectFromArray";
import { FormField } from "../ui/form";
import { ISelect } from "@/interfaces/ISelect";
import { useEffect, useState } from "react";
import { IDnDResponse } from "@/interfaces/IDnDResponse";
import { getDndRaces } from "@/functions/dnd-api/DnDfuns";

const RacesSelect: React.FC<ISelect> = ({ control }) => {
    const [races, setRaces] = useState<IDnDResponse[]>([]);

    useEffect(() => {
        getDndRaces().then((res) => {
            if (res && res.results) {
                setRaces(res.results);
            }
        });
    }, []);
    return (
        <FormField
            control={control}
            name="charRace"
            render={({ field }) => (
                <SelectFromArray
                    control={field}
                    placeholder="Selecione a raça"
                    options={races.map((r) => ({
                        value: r.index,
                        label: r.name,
                    }))}
                />
            )}
        />
    );
};

export default RacesSelect;
