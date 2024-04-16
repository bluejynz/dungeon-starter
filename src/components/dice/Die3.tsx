import Die from "./Die";

function Die3() {
    return (
        <Die>
            <div className="column">
                <div className="dot"></div>
                <div className="dot hidden"></div>
                <div className="dot hidden"></div>
            </div>
            <div className="column center-column">
                <div className="dot"></div>
            </div>
            <div className="column">
                <div className="dot hidden"></div>
                <div className="dot hidden"></div>
                <div className="dot"></div>
            </div>
        </Die>
    );
}

export default Die3;
