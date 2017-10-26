import isNumber from "./isNumber";

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the math string
 */
export default function calculate(obj, operation) {
    let allowedMathOperations = new RegExp(/[-÷+x]/),
        lastNumberReg = new RegExp(/(\d+)(?!.*\d)/).exec(obj.next),
        last = obj.next && obj.next.slice(-1) || null,
        lastNumber = lastNumberReg ? lastNumberReg[0] : false;
    // clear current state
    if (operation === 'C') {
        return {
            total: null,
            next: null,
        };
    }

    if (isNumber(operation)) {
        // don't do anything for two consecutive zero
        if (operation === '0' && obj.next === '0') {
            return {};
        }

        // replace last entered number  0 with the next number
        if (lastNumber === '0' && !allowedMathOperations.test(last)) {
            return {next: obj.next.replace(/.$/, operation)};
        }

        // concat last number with current entry
        if (obj.next) {
            return {
                next: obj.next + operation,
            };
        }

        return {
            next: operation,
            total: null,
        };
    }

    // process operation
    if (allowedMathOperations.test(operation)) {
        // replace last operation with the current
        // don't do anything for math operation before enter any number
        if (!obj.next) {
            return {}
        }
        if (obj.next && allowedMathOperations.test(last)) {
            return {
                next: obj.next.replace(/.$/, operation)
            };
        }
        // concat next state
        return {
            next: obj.next + operation
        };
    }

    // calculate
    if (operation === '=' && obj.next) {
        // remove last operation
        if (allowedMathOperations.test(last)) {
            obj.next = obj.next.slice(0, -1);
        }
        // prepare calc string
        obj.next = obj.next.replace(/÷/g, '/');
        obj.next = obj.next.replace(/x/g, '*');
        try {
            let result = eval(obj.next);
            return {
                next: null,
                total: result
            }
        } catch (e) {
            console.log('try to calculate invalid query');
            return {}
        }
    }

    // return previous obj
    return obj;
}