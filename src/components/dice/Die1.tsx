import { IMinor } from "@/interfaces/IMinor";
import Die from "./Die";
import Dot from "./Dot";

function Die1(props: IMinor) {
    return (
        <Die minor={props.minor} >
            <div></div>
            <div className="flex items-center">
                <Dot minor={false} />
            </div>
            <div></div>
        </Die>
    );
}

export default Die1;
