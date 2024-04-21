import { ISelectWKey } from "@/interfaces/ISelect";
import { FormField } from "../ui/form";
import AttributeRadioBtn from "./AttributeRadioBtn";
import { RadioGroup } from "../ui/radio-group";

interface IAttributeRadioBtnList extends ISelectWKey {
    diceResults: number[];
    // setDiceResults: Dispatch<SetStateAction<number[]>>;
}

const AttributeRadioBtnList: React.FC<IAttributeRadioBtnList> = ({
    control,
    formItemName,
    diceResults,
    // setDiceResults,
}) => {
    // TODO: 
    return (
        <>
            {Array.isArray(diceResults) && (
                <FormField
                    control={control}
                    name={`${formItemName}-attr`}
                    render={({ field }) => (
                        // <SelectFromArray
                        //     label={formItemName}
                        //     control={field}
                        //     placeholder="Selecione o valor"
                        //     options={diceResults.map((r) => ({
                        //         value: r.toString(),
                        //         label: r.toString(),
                        //     }))}
                        // />
                        <RadioGroup>
                            
                        </RadioGroup>
                    )}
                />
            )}
        </>
    );
};

export default AttributeRadioBtnList;
