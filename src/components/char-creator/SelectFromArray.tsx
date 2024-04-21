import { ISelectFromArray } from "@/interfaces/ISelectFromArray";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

const SelectFromArray: React.FC<ISelectFromArray> = ({
    control,
    defaultValue,
    placeholder,
    options,
    label,
}) => {
    return (
        <FormItem>
            {label && <FormLabel htmlFor={label}>{label}</FormLabel>}
            <Select
                onValueChange={control.onChange}
                defaultValue={defaultValue}
            >
                <FormControl>
                    <SelectTrigger>
                        <SelectValue
                            placeholder={placeholder || "Selecione um valor"}
                        />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {options.map((option: { value: string; label: string }) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <FormMessage />
        </FormItem>
    );
};

export default SelectFromArray;
