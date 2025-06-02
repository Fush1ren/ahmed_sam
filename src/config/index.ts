import 'dotenv/config'

export interface Config {
    token: string | undefined;
    clientId: string | undefined;
    jikanUrl: string;
}

export const config: Config = {
    token: process.env.TOKEN,
    clientId: process.env.CLIENT_ID,
    jikanUrl: process.env.JIKAN_URL || 'https://api.jikan.moe/v4',
}