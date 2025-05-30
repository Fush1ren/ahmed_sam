import { SlashCommandBuilder, EmbedBuilder, Colors } from "discord.js"
import { SlashCommand } from "../types";

const command : SlashCommand = {
    command: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Shows the bot's ping")
    ,
    execute: interaction => {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setAuthor({name: "Pong!", iconURL: interaction.client.user?.displayAvatarURL()})
                .setDescription(`🏓 Pong! \n 📡 Ping: ${interaction.client.ws.ping}`)
                .setColor(Colors.Blue)
            ]
        })
    },
    cooldown: 10
}

export default command