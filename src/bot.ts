import { ActivityType, Client, Collection } from "discord.js";
import * as Types from './types';

import { join } from "path";
import { readdirSync } from "fs";
import { config } from "./config";

const client = new Client({
    intents: [

    ],
    presence: {
        status: "idle",
        activities: [
            {
                name: "Skripsi Skripsi Skripsi",
                type: ActivityType.Playing,
            }
        ]
    }
})

client.slashCommands = new Collection<string, Types.SlashCommand>()
client.cooldowns = new Collection<string, number>()

const handlersDir = join(__dirname, "./handlers")
readdirSync(handlersDir).forEach(handler => {
    if (!handler.endsWith(".js")) return;
    require(`${handlersDir}/${handler}`)(client)
})

client.login(config.token).catch((err) => {
    console.error("[CRASH] Something went wrong while connecting to your bot...");
    console.error("[CRASH] Error from Discord API:" + err);
    return process.exit();
})