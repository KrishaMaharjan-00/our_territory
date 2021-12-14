import axios from 'axios';


export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'a6866b091cmsh74b820b7e55885ep148c64jsn7d1a4902a7d0'
          }
    });

    return data;
}
