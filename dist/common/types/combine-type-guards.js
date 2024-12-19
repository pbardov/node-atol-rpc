export default function combineTypeGuards(isT1, isT2) {
    return (v, errors = {}) => {
        const t1Valid = isT1(v, errors);
        const t2Valid = isT2(v, errors);
        return t1Valid && t2Valid;
    };
}
