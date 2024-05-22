import { ISelectWKey } from "@/interfaces/ISelect";
import { FormField } from "../ui/form";
import AttributeRadioBtn from "./AttributeRadioBtn";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { AttributesEnum } from "../enums/AttributesEnum";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";

interface IAttributeRadioBtnList extends ISelectWKey {
    diceResults: number[];
}

const AttributeRadioBtnList: React.FC<IAttributeRadioBtnList> = ({
    control,
    formItemName,
    diceResults,
}) => {
    const [inputs, setInputs] = useState<Element[]>([]);

    const handleClick = () => {
        
    }

    useEffect(() => {
        let btns = document.getElementsByClassName("radio-btn-attr");
        setInputs(Array.from(btns));
        // console.log(inputs[0]);
    }, [])

    return (
        <>
            {Array.isArray(diceResults) && (
                <FormField
                    control={control}
                    name={`${formItemName}-attr`}
                    render={({ field }) => (
                        <>
                            <h3 id={formItemName}>
                                {AttributesEnum[formItemName]}
                            </h3>
                            <RadioGroup className="flex m-auto gap-8">
                                {diceResults.map((d, i) => (
                                    <div key={`${formItemName}-${i}`}>
                                        <RadioGroupItem
                                            className="radio-btn-attr flex"
                                            value={d.toString()}
                                            id={i.toString()}
                                            onClick={handleClick}
                                        />
                                        <Label htmlFor={i.toString()}>
                                            {d}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                            <Separator />
                        </>
                    )}
                />
            )}
        </>
    );
};

export default AttributeRadioBtnList;
