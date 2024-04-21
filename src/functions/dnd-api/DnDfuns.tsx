import { IDnDResponseArray } from "@/interfaces/IDnDResponse";

const baseURL = "https://www.dnd5eapi.co/api/";

async function getDndClasses() {
    try {
        const response = await fetch(baseURL + "classes");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();

        const transformedResponse: IDnDResponseArray = {
            results: jsonData.results,
        };

        return transformedResponse;
    } catch (error) {
        console.error(error);
    }
}

async function getDndRaces() {
    try {
        const response = await fetch(baseURL + "races");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();

        const transformedResponse: IDnDResponseArray = {
            results: jsonData.results,
        };

        return transformedResponse;
    } catch (error) {
        console.error(error);
    }
}

async function getDndAttributes() {
    try {
        const response = await fetch(baseURL + "ability-scores");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();

        const transformedResponse: IDnDResponseArray = {
            results: jsonData.results,
        };

        return transformedResponse;
    } catch (error) {
        console.error(error);
    }
}

export { getDndClasses, getDndRaces, getDndAttributes };
