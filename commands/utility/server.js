import { SlashCommandBuilder } from "discord.js";

const data = new SlashCommandBuilder()
  .setName("server")
  .setDescription("Provides information about the server.");

async function execute(interaction) {
  await interaction.reply(
    `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`,
  );
}

export { data, execute };
