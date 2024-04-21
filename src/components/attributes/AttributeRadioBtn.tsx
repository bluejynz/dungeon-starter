import { IOptions } from "@/interfaces/ISelectFromArray";
import { Label } from "../ui/label";
import { RadioGroupItem } from "../ui/radio-group";

const AttributeRadioBtn = (props: IOptions, index: number) => {
    return (
        <div>
            <RadioGroupItem value={props.value} id={`${index}-${props.value}`} />
            <Label htmlFor="option-one">{props.label}</Label>
        </div>
    );
};

export default AttributeRadioBtn;
