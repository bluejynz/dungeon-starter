type DieComponent = () => JSX.Element;
let diceAttributeRolls: number[] = [];

function roll(btn: HTMLButtonElement) {
    btn.textContent = `Roll dice x${5 - diceAttributeRolls.length}`;
    let rngRolls = rollDice(5, 6);
    diceAttributeRolls.push(sumResultsNoMinor(rngRolls));

    saveDiceResults(diceAttributeRolls);
    createDiceElements(rngRolls);
    if (diceAttributeRolls.length >= 6) {
        btn.remove();
        //     createAttributesAllocationElements();
    }
    console.log("dice", rngRolls);
    return rngRolls;
}

function sumResultsNoMinor(results: number[]) {
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
        if (getIndexOfMinorValue(results) != i) {
            sum += results[i];
        }
    }
    return sum;
}

function createDiceElements(rngRolls: number[]) {
    let diceContainer = document.getElementById("dice-container");
    if (!diceContainer) {
        console.error("Element with ID 'dice-container' not found.");
        return;
    }

    if (!document.getElementById("h2-dice-info")) {
        let h2Info = document.createElement("h2");
        h2Info.id = "h2-dice-info";
        h2Info.textContent = "Suas rolagens foram:";
        diceContainer.before(h2Info);
    }

    const minorIndex = getIndexOfMinorValue(rngRolls);
    if (minorIndex >= 0 && minorIndex < diceContainer.children.length) {
        const minorDieElement = diceContainer.children[minorIndex];
        minorDieElement.classList.add("minor-die");
    }
}

function saveDiceResults(values: number[]) {
    console.log("Array stringify", JSON.stringify(values));
    const diceResults = JSON.stringify(values);
    localStorage.setItem("diceResults", diceResults);
}

function rollDice(qty: number, size: number) {
    let rngRolls = [];
    for (let i = 1; i <= qty; i++) {
        rngRolls.push(randomIntFromInterval(1, size));
    }
    return rngRolls;
}

function getIndexOfMinorValue(arr: number[]) {
    let minorValue = arr[0];
    let minorIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minorValue) {
            minorValue = arr[i];
            minorIndex = i;
        }
        if (minorValue === 1) {
            break;
        }
    }
    return minorIndex;
}

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { roll };
export type { DieComponent };
