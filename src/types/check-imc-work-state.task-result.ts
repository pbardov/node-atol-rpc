import isEnumOf from '../common/types/is-enum-of.js';
import structureValidator from '../common/types/structure-validator.js';
import isNumber from '../common/types/is-number.js';
import isBoolean from '../common/types/is-boolean.js';

export enum ImcFmStatus {
    blocked = 'blocked',
    noImcForCheck = 'noImcForCheck',
    receivedImc = 'receivedImc',
    requestedImcStatus = 'requestedImcStatus',
    receivedImcStatus = 'receivedImcStatus',
}

export const isImcFmStatus = isEnumOf(ImcFmStatus);

export enum ImcFmFreeMemory {
    less50 = 'less50',
    '50to80' = '50to80',
    '80to90' = '80to90',
    more90 = 'more90',
    outOfMemory = 'outOfMemory'
}

export const isImcFmFreeMemory = isEnumOf(ImcFmFreeMemory);

export enum ImcEcrStatus {
    notExecuted = 'notExecuted',
    executed = 'executed',
    completed = 'completed',
    receivedResult = 'receivedResult'
}

export const isImcEcrStatus = isEnumOf(ImcEcrStatus);

export enum ImcEcrType {
    modeStandAlone = 'modeStandAlone',
    waitForResult = 'waitForResult',
    notWaitForResult = 'notWaitForResult',
    notSendToServer = 'notSendToServer',
}

export const isImcEcrType = isEnumOf(ImcEcrType);

export enum ImcEcrStage {
    waitForTask = 'waitForTask',
    openConnection = 'openConnection',
    send = 'send',
    waitForResult = 'waitForResult',
    getResult = 'getResult',
    decodeResult = 'decodeResult',
    completed = 'completed',
    waitForRepeat = 'waitForRepeat',
}

export const isImcEcrStage = isEnumOf(ImcEcrStage);

export type ImcFmState = {
    status: ImcFmStatus;
    checkingCount: number;
    soldImcCount: number;
    noticeIsBegin: boolean;
    noticeFreeMemory: ImcFmFreeMemory;
    noticeCount: number;
};

export const isImcFmState = structureValidator<ImcFmState>({
    status: isImcFmStatus,
    checkingCount: isNumber,
    soldImcCount: isNumber,
    noticeIsBegin: isBoolean,
    noticeFreeMemory: isImcFmFreeMemory,
    noticeCount: isNumber,
});

export type ImcEcrState = {
    status: ImcEcrStatus;
    type: ImcEcrType;
    stage: ImcEcrStage;
};

export const isImcEcrState = structureValidator<ImcEcrState>({
    status: isImcEcrStatus,
    type: isImcEcrType,
    stage: isImcEcrStage,
});

export type CheckImcWorkStateTaskResult = {
    fm: ImcFmState;
    ecr: ImcEcrState;
};

export const isCheckImcWorkStateTaskResult = structureValidator<CheckImcWorkStateTaskResult>({
    fm: isImcFmState,
    ecr: isImcEcrState,
});
