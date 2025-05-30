"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const rest_1 = require("@discordjs/rest");
const fs_1 = require("fs");
const path_1 = require("path");
const config_1 = require("../config");
module.exports = (client) => {
    const slashCommands = [];
    let slashCommandsDir = (0, path_1.join)(__dirname, "../slashCommands");
    (0, fs_1.readdirSync)(slashCommandsDir).forEach(file => {
        if (!file.endsWith(".js"))
            return;
        let command = require(`${slashCommandsDir}/${file}`).default;
        slashCommands.push(command.command);
        client.slashCommands.set(command.command.name, command);
    });
    const rest = new rest_1.REST({ version: "10" }).setToken(config_1.config.token);
    rest.put(discord_js_1.Routes.applicationCommands(config_1.config.clientId), {
        body: slashCommands.map(command => command.toJSON())
    })
        .then((data) => {
        console.log(`🔥 Successfully loaded ${data.length} slash command(s)`);
    }).catch(e => {
        console.log(e);
    });
};
