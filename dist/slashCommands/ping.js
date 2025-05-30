"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const command = {
    command: new discord_js_1.SlashCommandBuilder()
        .setName("ping")
        .setDescription("Shows the bot's ping"),
    execute: interaction => {
        interaction.reply({
            embeds: [
                new discord_js_1.EmbedBuilder()
                    .setAuthor({ name: "Pong!", iconURL: interaction.client.user?.displayAvatarURL() })
                    .setDescription(`🏓 Pong! \n 📡 Ping: ${interaction.client.ws.ping}`)
                    .setColor(discord_js_1.Colors.Blue)
            ]
        });
    },
    cooldown: 10
};
exports.default = command;
