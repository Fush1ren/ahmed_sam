import { SlashCommandBuilder, EmbedBuilder, Colors } from "discord.js"
import { SlashCommand } from "../types";
import MyAnimeList from "src/utils/mal/anime";

const command : SlashCommand = {
    command: new SlashCommandBuilder()
    .setName("search-anime")
    .setDescription("Search for anime")
    .addStringOption(option => {
        return option.setName("name")
            .setDescription("Name of the anime to search for")
            .setMaxLength(100)
            .setRequired(true);
    }) as SlashCommandBuilder,
    execute: async (interaction) => {
        const animeName = interaction.options.getString("name");
        if (!animeName) {
            return interaction.reply({
                content: "Please provide an anime name to search for.",
                ephemeral: true
            });
        }
        const data = await MyAnimeList.getAnime(animeName, 1);
        if (!data || data.length === 0) {
            return interaction.reply({
                content: "No anime found with that name.",
                ephemeral: true
            });
        }
        const anime = data[0];
        const embed = new EmbedBuilder()
            .setTitle(anime.title)
            .setURL(anime.url)
            .setDescription(anime.synopsis || "No synopsis available.")
            .setThumbnail(anime.images?.jpg?.image_url || anime.images?.webp?.image_url)
            .addFields(
                { name: "Type", value: anime.type || "N/A", inline: true },
                { name: "Episodes", value: anime.episodes ? anime.episodes.toString() : "N/A", inline: true },
                { name: "Score", value: anime.score ? anime.score.toString() : "N/A", inline: true },
                { name: "Status", value: anime.status || "N/A" }
            )
            .setColor(Colors.Blue)
            .setFooter({ text: `ID: ${anime.mal_id}` });
            
        if (anime.trailer?.youtube_id) {
            embed.setImage(`${anime.trailer.images?.image_url || `https://img.youtube.com/vi/${anime.trailer.youtube_id}/hqdefault.jpg`}`);
        }
        if (anime.titles && anime.titles.length > 0) {
            const titles = anime.titles.map(t => `${t.type}: ${t.title}`).join("\n");
            embed.addFields({ name: "Titles", value: titles });
        }
        if (anime.aired?.string) {
            embed.addFields({ name: "Aired", value: anime.aired.string });
        }
        if (anime.duration) {
            embed.addFields({ name: "Duration", value: anime.duration });
        }
        if (anime.rating) {
            embed.addFields({ name: "Rating", value: anime.rating });
        }
        if (anime.members) {
            embed.addFields({ name: "Members", value: anime.members.toString() });
        }
        if (anime.favorites) {
            embed.addFields({ name: "Favorites", value: anime.favorites.toString() });
        }
        await interaction.reply({ embeds: [embed] });
    },
    cooldown: 10
}

export default command