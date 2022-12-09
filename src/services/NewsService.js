import axios from "axios";
const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "9fdcf4bba00441d5987f148c2ead0e12"
export function getAllNews(topic){
    return axios.get(`${BASE_URL}/everything?q=${topic}&apiKey=${API_KEY}`);
}

export function getTopHeadlines(){
    return axios.get(`${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`);
}