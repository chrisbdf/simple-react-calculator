import assert from "assert";
import operate from "./../src/logic/operate";


// unit tests for Operate module
describe('Calculator operations', ()=> {
    it('should calculate correct + operator', () => {
        let result = operate(2, 3, '+');
        assert.equal(result, 5);
    });
    it('should calculate correct - operator', () => {
        let result = operate(2, 3, '-');
        assert.equal(result, -1);
    });
    it('should calculate correct x operator', () => {
        let result = operate(2, 3, 'x');
        assert.equal(result, 6);
    });
    it('should calculate correct / operator', () => {
        let result = operate(10, 5, '÷');
        assert.equal(result, 2);
    });
});
