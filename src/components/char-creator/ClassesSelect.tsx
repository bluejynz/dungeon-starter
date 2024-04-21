import SelectFromArray from "./SelectFromArray";
import { FormField } from "../ui/form";
import { ISelect } from "@/interfaces/ISelect";
import { useEffect, useState } from "react";
import { getDndClasses } from "@/functions/dnd-api/DnDfuns";
import { IDnDResponse } from "@/interfaces/IDnDResponse";

const ClassesSelect: React.FC<ISelect> = ({ control }) => {
    const [classes, setClasses] = useState<IDnDResponse[]>([]);

    useEffect(() => {
        getDndClasses().then((res) => {
            if (res && res.results) {
                setClasses(res.results);
            }
        });
    }, []);
    return (
        <FormField
            control={control}
            name="charClass"
            render={({ field }) => (
                <SelectFromArray
                    control={field}
                    placeholder="Selecione a classe"
                    options={classes.map((c) => ({
                        value: c.index,
                        label: c.name,
                    }))}
                />
            )}
        />
    );
};

export default ClassesSelect;
