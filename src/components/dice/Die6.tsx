import { IMinor } from "@/interfaces/IMinor";
import Die from "./Die";
import Dot from "./Dot";

function Die6(props: IMinor) {
    return (
        <Die minor={props.minor} >
            <div className="flex flex-col justify-between">
                <Dot minor={false} />
                <Dot minor={false} />
                <Dot minor={false} />
            </div>
            <div>
            </div>
            <div className="flex flex-col justify-between">
                <Dot minor={false} />
                <Dot minor={false} />
                <Dot minor={false} />
            </div>
        </Die>
    );
}

export default Die6;
