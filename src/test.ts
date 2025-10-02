import AtolRpc from './atol-rpc.js';
import * as util from 'node:util';
import {readFile} from 'node:fs/promises';
import {isSettings} from './types/settings.js';

async function bootstrap() {
	const kkm = new AtolRpc();
	console.log('KKM instance created');
	const defaultSettings = kkm.getSettings();
	console.log(`Settings valid ${isSettings(defaultSettings)}`);
	console.log(`KKM default settings:\n${JSON.stringify(defaultSettings, null, '  ')}`);

	const settingsRaw = await readFile('settings.json', {encoding: 'utf8'});
	const settings = JSON.parse(settingsRaw) as unknown;
	if (!isSettings(settings)) {
		throw new Error('Wrong settings file');
	}

	kkm.setSettings(settings);
	console.log(`KKM settings:\n${JSON.stringify(settings, null, '  ')}`);

	kkm.open();
	try {
		const deviceInfo = await kkm.getDeviceInfo();
		const deviceStatus = await kkm.getDeviceStatus();
		const registrationInfo = await kkm.getRegistrationInfo();
		console.log(JSON.stringify({deviceInfo, deviceStatus, registrationInfo}, null, '  '));
	} finally {
		kkm.close();
	}
}

void bootstrap().then(() => {
	console.log('All done');
}).catch((err: unknown) => {
	console.error(`Error happened:\n${util.inspect(err)}`);
});
