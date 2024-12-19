export default function getTypeGuardDetails(f) {
    return `${f.name}\n${f.toString().substring(0, 16)}`;
}
