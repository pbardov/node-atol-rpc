/* eslint-disable @typescript-eslint/naming-convention */
import {
	type Settings as Fptr10Settings, Baudrate, Bits, Model, OfdChannel, Parity, Port, Stopbits,
} from 'node-atol-wrapper';
import isEnumOf from '../common/types/is-enum-of.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import isBoolean from '../common/types/is-boolean.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';

export enum WorkMode {
	sync = 'sync',
	async = 'async',
}

export const isWorkMode = isEnumOf(WorkMode);
export const isBaudrate = isEnumOf(Baudrate);
export const isBits = isEnumOf(Bits);
export const isModel = isEnumOf(Model);
export const isOfdChannel = isEnumOf(OfdChannel);
export const isParity = isEnumOf(Parity);
export const isPort = isEnumOf(Port);
export const isStopbits = isEnumOf(Stopbits);

export type Settings = Fptr10Settings & {
	workMode?: WorkMode;
};

export const isSettings = structureValidator<Settings>({
	AccessPassword: isString,
	AutoDisableBluetooth: isBoolean,
	AutoEnableBluetooth: isBoolean,
	AutoReconnect: isBoolean,
	BaudRate: isBaudrate,
	Bits: isBits,
	ComFile: isString,
	DocumentsJournalPath: isString,
	IPAddress: isString,
	IPPort: isNumber,
	InvertCashDrawerStatus: isBoolean,
	LibraryPath: isString,
	MACAddress: isString,
	Model: isModel,
	OfdChannel: isOfdChannel,
	Parity: isParity,
	Port: isPort,
	RemoteServerAddr: isString,
	RemoteServerConnectionTimeout: isNumber,
	ScriptsPath: isString,
	StopBits: isStopbits,
	UsbDevicePath: isString,
	UseDocumentsJournal: isBoolean,
	UserPassword: isString,
	workMode: makeOpt(isWorkMode),
});
