import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async(url) => {
    const { data } = await axios.get(url, {
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key": "7f75c797d7msh167c6c447ae5822p157c23jsn30ca5ffabbab",
        },
    });

    return data;
};