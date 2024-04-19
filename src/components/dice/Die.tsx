import { ReactNode, useEffect, useState } from "react";

interface IDie {
    minor?: boolean;
    children: ReactNode;
}

function Die(props: IDie) {
    const { minor = false, children } = props;
    const [classNames, setClassNames] = useState("");

    useEffect(() => {
        let cNames =
            "die w-[80px] h-[80px] my-[20px] mx-auto flex justify-between rounded-md border shadow-inner p-[10px] animate-spin-dice ";
        if (props.minor) {
            cNames += "bg-[#f88] border-[#f88]";
        } else {
            cNames += "bg-[#ddd] border-[#ddd]";
        }
        setClassNames(cNames);
    }, [minor]);

    return <div className={classNames}>{children}</div>;
}

export default Die;
