import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_fpMyrVVKeysHLjD8ZT25mzc4z7BYuv7W78h3jJlC7fuF2OzIj8aQVcROPDJcLoFo";



export function fetchBreeds() { 
    return axios.get('https://api.thecatapi.com/v1/breeds');
};

export function fetchCatByBreed(breedId){ 
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=` + breedId);
}


