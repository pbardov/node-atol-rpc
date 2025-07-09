/* eslint-disable @typescript-eslint/naming-convention */
import isEnumOf from '../common/types/is-enum-of.js';
import structureValidator from '../common/types/structure-validator.js';
import isString from '../common/types/is-string.js';
import isBoolean from '../common/types/is-boolean.js';
import isNumber from '../common/types/is-number.js';
import {makeOpt} from '../common/types/is-opt.js';

export enum Baudrate {
	LIBFPTR_PORT_BR_1200 = 1200,
	LIBFPTR_PORT_BR_2400 = 2400,
	LIBFPTR_PORT_BR_4800 = 4800,
	LIBFPTR_PORT_BR_9600 = 9600,
	LIBFPTR_PORT_BR_19200 = 19200,
	LIBFPTR_PORT_BR_38400 = 38400,
	LIBFPTR_PORT_BR_57600 = 57600,
	LIBFPTR_PORT_BR_115200 = 115200,
	LIBFPTR_PORT_BR_230400 = 230400,
	LIBFPTR_PORT_BR_460800 = 460800,
	LIBFPTR_PORT_BR_921600 = 921600,
}

export const isBaudrate = isEnumOf(Baudrate);

export enum Bits {
	LIBFPTR_PORT_BITS_7 = 7,
	LIBFPTR_PORT_BITS_8 = 8,
}

export const isBits = isEnumOf(Bits);

export enum Parity {
	LIBFPTR_PORT_PARITY_NO = 0,
	LIBFPTR_PORT_PARITY_ODD,
	LIBFPTR_PORT_PARITY_EVEN,
	LIBFPTR_PORT_PARITY_MARK,
	LIBFPTR_PORT_PARITY_SPACE,
}

export const isParity = isEnumOf(Parity);

export enum Stopbits {
	LIBFPTR_PORT_SB_1 = 0,
	LIBFPTR_PORT_SB_1_5,
	LIBFPTR_PORT_SB_2,
}

export const isStopbits = isEnumOf(Stopbits);

export enum Model {
	LIBFPTR_MODEL_UNKNOWN = 0,
	LIBFPTR_MODEL_ATOL_AUTO = 500,
	LIBFPTR_MODEL_ATOL_11F = 67,
	LIBFPTR_MODEL_ATOL_15F = 78,
	LIBFPTR_MODEL_ATOL_20F = 81,
	LIBFPTR_MODEL_ATOL_22F = 63,
	LIBFPTR_MODEL_ATOL_25F = 57,
	LIBFPTR_MODEL_ATOL_27F = 87,
	LIBFPTR_MODEL_ATOL_30F = 61,
	LIBFPTR_MODEL_ATOL_42FS = 77,
	LIBFPTR_MODEL_ATOL_47FA = 48,
	LIBFPTR_MODEL_ATOL_50F = 80,
	LIBFPTR_MODEL_ATOL_52F = 64,
	LIBFPTR_MODEL_ATOL_55F = 62,
	LIBFPTR_MODEL_ATOL_60F = 75,
	LIBFPTR_MODEL_ATOL_77F = 69,
	LIBFPTR_MODEL_ATOL_90F = 72,
	LIBFPTR_MODEL_ATOL_91F = 82,
	LIBFPTR_MODEL_ATOL_92F = 84,
	LIBFPTR_MODEL_ATOL_SIGMA_10 = 86,
	LIBFPTR_MODEL_ATOL_SIGMA_7F = 90,
	LIBFPTR_MODEL_ATOL_SIGMA_8F = 91,
	LIBFPTR_MODEL_ATOL_PT_5F = 89,
	LIBFPTR_MODEL_KAZNACHEY_FA = 76,
	LIBFPTR_MODEL_ATOL_1F = 93,
	LIBFPTR_MODEL_ATOL_22v2F = 95,
}

export const isModel = isEnumOf(Model);

export enum OfdChannel {
	LIBFPTR_OFD_CHANNEL_NONE = 0,
	LIBFPTR_OFD_CHANNEL_USB,
	LIBFPTR_OFD_CHANNEL_PROTO,
	LIBFPTR_OFD_CHANNEL_AUTO = 2, // LIBFPTR_OFD_CHANNEL_PROTO
}

export const isOfdChannel = isEnumOf(OfdChannel);

export enum Port {
	LIBFPTR_PORT_COM = 0,
	LIBFPTR_PORT_USB,
	LIBFPTR_PORT_TCPIP,
	LIBFPTR_PORT_BLUETOOTH,
}

export const isPort = isEnumOf(Port);

export type Fptr10Settings = {
	AccessPassword: string;
	AutoDisableBluetooth: boolean;
	AutoEnableBluetooth: boolean;
	AutoReconnect: boolean;
	BaudRate: Baudrate;
	Bits: Bits;
	ComFile: string;
	DocumentsJournalPath: string;
	IPAddress: string;
	IPPort: number;
	InvertCashDrawerStatus: boolean;
	LibraryPath: string;
	MACAddress: string;
	Model: Model;
	OfdChannel: OfdChannel;
	Parity: Parity;
	Port: Port;
	RemoteServerAddr: string;
	RemoteServerConnectionTimeout: number;
	ScriptsPath: string;
	StopBits: Stopbits;
	UsbDevicePath: string;
	UseDocumentsJournal: boolean;
	UserPassword: string;
};

export const isFptr10Settings = structureValidator<Fptr10Settings>({
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
});
