import { ReactNode } from "react";

function Die(props: { children: ReactNode }) {
    return (
        <div
            className="die w-[80px] h-[80px] my-[20px] mx-auto flex justify-between 
        bg-slate-50 rounded-md border border-slate-50 shadow-inner p-[14px] animate-spin-dice"
        >
            {props.children}
        </div>
    );
}

export default Die;
