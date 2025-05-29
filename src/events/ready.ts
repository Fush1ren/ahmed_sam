import { Client, Events } from "discord.js";
import { Config } from "src/config";

export default (client: Client, _config: Config): void => {
    client.on(Events.ClientReady, async () => {
        if (!client.user || !client.application) return;
        console.log(`Logged in as ${client.user?.tag}!`);
    });
}