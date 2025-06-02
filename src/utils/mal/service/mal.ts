import axios, { AxiosInstance, AxiosResponse } from "axios";
import { config } from "../../../config";
import { AnimeList, AnimeSearchParams } from "src/types/MyAnimeListType";

const API = (
    { headers = {}, params = {} } = {},
): AxiosInstance => {
    const BASE_URL = config.jikanUrl;
    const instance = axios.create({
        baseURL: `${BASE_URL}/api/v1`,
        headers:  {
        "Content-type": "application/json",
        ...headers,
    },
        params,
    });

    return instance;
}

export const MyAnimeListService = {
    getSearchAnime: (params?: AnimeSearchParams): Promise<AxiosResponse<AnimeList>> => {
        return API({ params }).get('/anime');
    }
}

export default MyAnimeListService;