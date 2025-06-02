export type AnimeType = 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music' | 'cm' | 'pv' | 'tv_special';

export type AnimeStatus = 'airing' | 'completed' | 'upcoming';

export type AnimeRating = 'g' | 'pg' | 'pg13' | 'r13' | 'r' | 'rx';

export interface AnimeData {
    mal_id: number;
    url: string;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
        webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    trailer: {
        youtube_id?: string;
        url?: string;
        embed_url?: string;
        images?: {
            image_url: string;
            small_image_url: string;
            medium_image_url: string;
            large_image_url: string;
            maximum_image_url: string;
        };
    };
    approved: boolean;
    titles: {
        type: 'default' | 'english' | 'japanese';
        title: string;
    }[];
    title: string;
    title_english?: string;
    title_japanese?: string;
    title_synonyms?: string[];
    type: AnimeType;
    source?: string;
    episodes?: number | null;
    status: AnimeStatus | 'finished_airing' | 'not_yet_aired';
    airing?: boolean;
    aired?: {
        from?: string; // ISO 8601 date
        to?: string; // ISO 8601 date
        prop?: {
            from?: { day: number; month: number; year: number };
            to?: { day: number; month: number; year: number };
        };
        string?: string; // e.g., "Apr 3, 2016 to Jun 26, 2016"
    };
    duration?: string; // e.g., "24 min per ep"
    rating?: string; // e.g., "PG-13 - Teens 13 or older"
    score?: number | null;
    scored_by?: number | null;
    rank?: number | null;
    popularity?: number | null;
    members?: number | null;
    favorites?: number | null;
    synopsis?: string;
    background?: string;
    season?: string; // e.g., "spring", "summer", "fall", "winter"
    year?: number; // e.g., 2016
    broadcast?: {
        day?: string; // e.g., "Sundays"
        time?: string; // e.g., "01:00"
        timezone?: string; // e.g., "Asia/Tokyo"
        string?: string; // e.g., "Sundays at 01:00 (JST)"
    };
    producers?: {
        mal_id: number;
        type: string; // e.g., "anime", "manga", "tv", etc.
        name: string;
        url: string;
    }[];
    licensors?: {
        mal_id: number;
        type: string; // e.g., "anime", "manga", "tv", etc.
        name: string;
        url: string;
    }[];
    studios?: {
        mal_id: number;
        type: string; // e.g., "anime", "manga", "tv", etc.
        name: string;
        url: string;
    }[];
    genres?: {
        mal_id: number;
        type: string; // e.g., "anime", "manga", "tv", etc.
        name: string;
        url: string;
    }[];
    explicit_genres?: {
        mal_id: number;
        type: string; // e.g., "anime", "manga", "tv", etc.
        name: string;
        url: string;
    }[];
    themes?: {
        mal_id: number;
        type: string; // e.g., "anime", "manga", "tv", etc.
        name: string;
        url: string;
    }[];
    demographics?: {
        mal_id: number;
        type: string; // e.g., "anime", "manga", "tv", etc.
        name: string;
        url: string;
    }[];
}

export interface AnimeList {
 pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
        count: number;
        total: number;
        per_page: number;
    };
 }
 data: AnimeData[];
}

export interface AnimeDataBasic {
    data: AnimeData;
}

export interface AnimeSearchParams {
    unapproved?: boolean;
    page?: number;
    limit?: number;
    q?: string;
    type?: AnimeType;
    score?: number;
    min_score?: number;
    max_score?: number;
    status?: AnimeStatus;
    
    /**
     *  G - All Ages
        PG - Children
        PG-13 - Teens 13 or older
        R - 17+ (violence & profanity)
        R+ - Mild Nudity
        Rx - Hentai
     */
    rating?: AnimeRating;
    sfw?: boolean;
    genres?: string;
    genres_exclude?: string;
}