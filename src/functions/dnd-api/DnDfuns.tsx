import { IDnDResponseArray } from "@/interfaces/IDnDResponse";
import axios from "axios";

const baseURL = "https://www.dnd5eapi.co/api/";

async function getDndClasses(): Promise<IDnDResponseArray> {
    try {
        const response = await axios.get(baseURL + "classes");
        const transformedResponse: IDnDResponseArray = {
            results: response.data.results,
        };
        
        return transformedResponse;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getDndRaces() {
    try {
        const response = await axios.get(baseURL + "races");

        const transformedResponse: IDnDResponseArray = {
            results: response.data.results,
        };

        return transformedResponse;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getDndAttributes() {
    try {
        const response = await axios.get(baseURL + "ability-scores");

        const transformedResponse: IDnDResponseArray = {
            results: response.data.results,
        };

        return transformedResponse;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { getDndClasses, getDndRaces, getDndAttributes };
