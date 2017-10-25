import assert from "assert";
import calculate from "./../src/logic/calculate";


// unit tests for Operate module
describe('App state based on selected operation', ()=> {
    it('should clear current app state on `C` operation', () => {
        let result = calculate({
                total: 100,
                next: 5,
                operation: '+',
            }, 'C'),
            expectedResult = {
                total: null,
                next: null,
                operation: null
            };
        assert.deepEqual(result, expectedResult);
    });

    it('should set state next  55 on two clicks on 5 button', () => {
        let result = calculate({
                total: 0,
                next: 5,
            }, '5'),
            expectedResult = {
                total: null,
                next: '55',
            };
        assert.deepEqual(result, expectedResult);
    });

    it('should set state total  100 on 50 + 50 operation', () => {
        let result = calculate({
                total: 50,
                next: 50,
                operation: '+'
            }, '='),
            expectedResult = {
                total: 100,
                next: null,
                operation: null
            };
        assert.deepEqual(result, expectedResult);
    });
    it('should set state total 0 on 50 - 50 operation', () => {
        let result = calculate({
                total: 50,
                next: 50,
                operation: '-'
            }, '='),
            expectedResult = {
                total: 0,
                next: null,
                operation: null
            };
        assert.deepEqual(result, expectedResult);
    });

    it('should set state total  100 on 10 x 10 operation', () => {
        let result = calculate({
                total: 10,
                next: 10,
                operation: 'x'
            }, '='),
            expectedResult = {
                total: 100,
                next: null,
                operation: null
            };
        assert.deepEqual(result, expectedResult);
    });

    it('should set state total  10 on 100 / 10 operation', () => {
        let result = calculate({
                total: 100,
                next: 10,
                operation: '÷'
            }, '='),
            expectedResult = {
                total: 10,
                next: null,
                operation: null
            };
        assert.deepEqual(result, expectedResult);
    });


});
