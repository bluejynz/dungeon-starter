import { IMinor } from "@/interfaces/IMinor";
import Die from "./Die";
import Dot from "./Dot";

function Die2(props: IMinor) {
    return (
        <Die minor={props.minor}>
            <div>
                <Dot minor={false} />
            </div>
            <div></div>
            <div className="flex items-end">
                <Dot minor={false} />
            </div>
        </Die>
    );
}

export default Die2;
