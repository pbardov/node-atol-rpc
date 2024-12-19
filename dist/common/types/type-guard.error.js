import * as util from 'node:util';
export class TypeGuardError extends TypeError {
    cause;
    constructor(message, { cause } = {}) {
        super(message, { cause });
        this.cause = cause;
        Object.setPrototypeOf(this, TypeGuardError.prototype);
    }
    toString() {
        return util.inspect(this, { showHidden: true });
    }
}
