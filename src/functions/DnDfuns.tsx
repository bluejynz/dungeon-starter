import { IDnDResponseArray } from "@/interfaces/IDnDResponseArray";

const baseURL = "https://www.dnd5eapi.co/api/";

async function getDndClasses() {
    try {
        const response = await fetch(baseURL + "classes");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();

        const transformedResponse: IDnDResponseArray = {
            classes: jsonData.results,
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
            classes: jsonData.results,
        };

        return transformedResponse;
    } catch (error) {
        console.error(error);
    }
}

export { getDndClasses, getDndRaces };
