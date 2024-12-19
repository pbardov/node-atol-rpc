export const base64StringRe = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
export function isBase64String(v) {
    return typeof v === 'string'
        && base64StringRe.test(v);
}
