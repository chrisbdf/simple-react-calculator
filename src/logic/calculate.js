import operate from './operate';

export function isNumber(number) {
    return !!number.match(/[0-9]+/);
}


/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, operation) {
    // clear current state
    if (operation === 'C') {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(operation)) {
        if (operation === '0' && obj.next === '0') {
            return {};
        }
        // If there is an number, update next
        if (obj.operation) {
            if (obj.next) {
                return { next: obj.next + operation };
            }
            return { next: operation };
        }
        // If there is no number, update next and clear the value
        if (obj.next) {
            return {
                next: obj.next + operation,
                total: null,
            };
        }
        return {
            next: operation,
            total: null,
        };
    }

    if (operation === '=') {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            // '=' with no operation, nothing to do
            return {};
        }
    }

    // User pressed an operation button and there is an existing operation
    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: operation,
        };
    }

    // The user hasn't typed a number yet, just save the operation
    if (!obj.next) {
        return { operation: operation };
    }

    // save the operation and shift 'next' into 'total'
    return {
        total: obj.next,
        next: null,
        operation: operation,
    };
}