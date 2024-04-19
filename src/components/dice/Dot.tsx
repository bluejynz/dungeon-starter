import { useEffect, useState } from "react";

interface IDot {
    minor: boolean;
}

function Dot(props: IDot) {
    const [classNames, setClassNames] = useState("");

    useEffect(() => {
        let cNames = "dot w-[16px] h-[16px] bg-black rounded-full border ";
        if (props.minor) {
            cNames += "border-[#faa] shadow-sm-rose";
        } else {
            cNames += "border-[#ddd] shadow-sm-light";
        }
        setClassNames(cNames);
    });

    return <div className={classNames}></div>;
}

export default Dot;
