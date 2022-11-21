import { Command, RegisterCommand } from '@skyra/http-framework';
import type { User } from 'discord.js';

@RegisterCommand((builder) =>
	builder //
		.setName('hello')
		.setDescription('Say hello to people')
		.addMentionableOption((option) =>
			option //
				.setName('user')
				.setDescription('The user to say hello to')
				.setRequired(true)
		)
)
export class UserCommand extends Command {
	public override chatInputRun(interaction: Command.ChatInputInteraction, option: Option) {
		this.container.logger.info('Hello command was used!');
		const user = option.user;
		return interaction.reply({ content: `Hello, ${user}! Greeting to you by ${interaction.user}!` });
	}
}

interface Option {
	user: User;
}
