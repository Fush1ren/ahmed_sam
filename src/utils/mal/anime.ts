import { AnimeSearchParams } from "src/types/MyAnimeListType";
import MyAnimeListService from "./service/mal";

const MyAnimeList = {
    getAnime: async (q: string, page: number) => {
        try {
            const params = {
            q,
            limit: 10,
            page: page,
        } as AnimeSearchParams;
        const { data } = await MyAnimeListService.getSearchAnime(params);
        return data;
        } catch (error) {
            console.error("Error fetching anime:", error);
            throw error;
        }
    }
}

export default MyAnimeList;