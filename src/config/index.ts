import 'dotenv/config'

export interface Config {
    token: string | undefined;
    clientId: string | undefined;
}

export const config: Config = {
    token: process.env.TOKEN,
    clientId: process.env.CLIENT_ID,
}