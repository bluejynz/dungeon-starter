import Die from "./Die";

function Die1() {
    return (
        <Die>
            <div className="flex justify-between flex-column">
                <div className="dot hidden"></div>
                <div className="dot hidden"></div>
                <div className="dot hidden"></div>
            </div>
            <div className="flex justify-center flex-column">
                <div className="dot"></div>
            </div>
            <div className="flex justify-between flex-column">
                <div className="dot hidden"></div>
                <div className="dot hidden"></div>
                <div className="dot hidden"></div>
            </div>
        </Die>
    );
}

export default Die1;
