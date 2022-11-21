import type { IntegerString } from '@skyra/env-utilities';

declare module '@skyra/env-utilities' {
	interface Env {
		OWNER: string;
		ADDRESS: string;
		HTTP_PORT: IntegerString;
		DISCORD_TOKEN: string;
		GUILD_ID: string;
	}
}

export default undefined;
