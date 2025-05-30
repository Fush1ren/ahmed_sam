"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const createVoice = {
    command: new discord_js_1.SlashCommandBuilder()
        .setName("createvoice")
        .setDescription("Create a voice channel")
        .addStringOption(option => {
        return option.setName("channelname")
            .setDescription("Name of the voice channel")
            .setMaxLength(50)
            .setRequired(true);
    })
        .addIntegerOption(option => {
        return option.setName("userlimit")
            .setDescription("User limit of the voice channel")
            .setMinValue(1)
            .setMaxValue(99)
            .setRequired(false);
    }),
    execute: interaction => {
        const user = interaction.member?.user.username;
        const channelName = interaction.options.getString("channelname");
        const userLimit = interaction.options.getInteger("userlimit");
        if (!interaction.guild) {
            return interaction.reply("This command can only be used in a server.");
        }
        let voiceChannel = {
            name: channelName ?? `${user}-voice`,
            type: 2,
            parent: '1029686285771747339',
        };
        if (userLimit) {
            voiceChannel = {
                ...voiceChannel,
                userLimit: userLimit,
            };
        }
        interaction.guild?.channels.create(voiceChannel);
        interaction.reply(`Creating voice channel for @${user}`);
    },
    cooldown: 10
};
exports.default = createVoice;
