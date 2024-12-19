export default function isEnumOf(e) {
    return (v) => Object.values(e).includes(v);
}
