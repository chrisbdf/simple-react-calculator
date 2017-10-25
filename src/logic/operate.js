export default function operate(numberOne, numberTwo, operation) {
    const one = Number(numberOne);
    const two = Number(numberTwo);
    switch (operation) {
        case '+':
            return (one + two).toString();
            break;
        case '-':
            return (one - two).toString();
            break;
        case 'x':
            return (one * two).toString();
            break;
        case '÷':
            return (one / two).toString();
            break;
        default:
            throw Error(`Unknown operation '${operation}'`);
    }
}