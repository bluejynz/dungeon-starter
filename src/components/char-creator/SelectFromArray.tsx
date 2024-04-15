import { ISelectFromArray } from "@/interfaces/ISelectFromArray";
import { FormControl, FormItem, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const SelectFromArray: React.FC<ISelectFromArray> = ({ control, defaultValue, placeholder, options }) => { // Adicionado '=' após a declaração da função
    return (
      <FormItem>
        <Select
          onValueChange={control.onChange}
          defaultValue={defaultValue}
        >
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={placeholder || "Selecione um valor"} />
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
