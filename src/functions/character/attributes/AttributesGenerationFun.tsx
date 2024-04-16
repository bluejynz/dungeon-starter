let diceAttributeRolls: number[] = [];

function roll(btn: HTMLButtonElement) {
    btn.textContent = `Roll dice x${5 - diceAttributeRolls.length}`;
    let rngRolls = rollDice(5, 6);
    diceAttributeRolls.push(sumResultsNoMinor(rngRolls));
    
    saveDiceResults(diceAttributeRolls);
    // createDiceElements(rngRolls);
    if (diceAttributeRolls.length >= 6) {
        btn.remove();
    //     createAttributesAllocationElements();
    }
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

// function createDiceElements(rngRolls: number[]) {
//     let diceContainer = document.getElementById("dice-container");
//     diceContainer.innerHTML = "";
//     if (!document.getElementById("h2-dice-info")) {
//         let h2Info = document.createElement("h2");
//         h2Info.id = "h2-dice-info";
//         h2Info.textContent = "Suas rolagens foram:";
//         diceContainer.before(h2Info);
//     }
//     let minorIndex = getIndexOfMinorValue(rngRolls);
//     rngRolls.forEach((r) => {
//         diceContainer.innerHTML += dice[r];
//     });
//     let minorDieElement = diceContainer.children[minorIndex];
//     minorDieElement.classList.add("minor-die");
// }

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
    let minorValue;
    let minorIndex;
    for (let i = 0; i < arr.length; i++) {
        if (!minorValue) {
            minorValue = arr[i];
            minorIndex = i;
        } else if (arr[i] < minorValue) {
            minorValue = arr[i];
            minorIndex = i;
        }
        if (minorValue && minorValue == 1) {
            break;
        }
    }
    return minorIndex;
}

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { roll };