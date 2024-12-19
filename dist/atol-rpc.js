import AtolRpcBase from './atol-rpc-base.js';
import { JsonTaskType } from './types/json-task-type.js';
export default class AtolRpc extends AtolRpcBase {
    async getDeviceStatus() {
        return this.processJsonTask({ type: JsonTaskType.getDeviceStatus });
    }
    async getDeviceInfo() {
        return this.processJsonTask({ type: JsonTaskType.getDeviceInfo });
    }
    async getMcu() {
        return this.processJsonTask({ type: JsonTaskType.getMcu });
    }
    async getCashDrawerStatus() {
        return this.processJsonTask({ type: JsonTaskType.getCashDrawerStatus });
    }
    async getShiftStatus() {
        return this.processJsonTask({ type: JsonTaskType.getShiftStatus });
    }
    async getFnInfo() {
        return this.processJsonTask({ type: JsonTaskType.getFnInfo });
    }
    async getFnStatus() {
        return this.processJsonTask({ type: JsonTaskType.getFnStatus });
    }
    async ofdExchangeStatus() {
        return this.processJsonTask({ type: JsonTaskType.ofdExchangeStatus });
    }
    async getShiftTotals() {
        return this.processJsonTask({ type: JsonTaskType.getShiftTotals });
    }
    async getOverallTotals() {
        return this.processJsonTask({ type: JsonTaskType.getOverallTotals });
    }
    async getDepartmentSum() {
        return this.processJsonTask({ type: JsonTaskType.getDepartmentSum });
    }
    async continuePrint() {
        return this.processJsonTask({ type: JsonTaskType.continuePrint });
    }
    async printLastReceiptCopy() {
        return this.processJsonTask({ type: JsonTaskType.printLastReceiptCopy });
    }
    async reportX(param = {}) {
        return this.processJsonTask({ ...param, type: JsonTaskType.reportX });
    }
    async openShift(param = {}) {
        return this.processJsonTask({ ...param, type: JsonTaskType.openShift });
    }
    async closeShift(param = {}) {
        return this.processJsonTask({ ...param, type: JsonTaskType.closeShift });
    }
    async sell(param) {
        return this.processJsonTask({ ...param, type: JsonTaskType.sell });
    }
    async sellReturn(param) {
        return this.processJsonTask({ ...param, type: JsonTaskType.sellReturn });
    }
    async buy(param) {
        return this.processJsonTask({ ...param, type: JsonTaskType.buy });
    }
    async buyReturn(param) {
        return this.processJsonTask({ ...param, type: JsonTaskType.buyReturn });
    }
}
