"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const path_1 = require("path");
const fs_1 = require("fs");
const config_1 = require("./config");
const client = new discord_js_1.Client({
    intents: [],
    presence: {
        status: "idle",
        activities: [
            {
                name: "Skripsi Skripsi Skripsi",
                type: discord_js_1.ActivityType.Playing,
            }
        ]
    }
});
client.slashCommands = new discord_js_1.Collection();
client.cooldowns = new discord_js_1.Collection();
const handlersDir = (0, path_1.join)(__dirname, "./handlers");
(0, fs_1.readdirSync)(handlersDir).forEach(handler => {
    if (!handler.endsWith(".js"))
        return;
    require(`${handlersDir}/${handler}`)(client);
});
client.login(config_1.config.token).catch((err) => {
    console.error("[CRASH] Something went wrong while connecting to your bot...");
    console.error("[CRASH] Error from Discord API:" + err);
    return process.exit();
});
