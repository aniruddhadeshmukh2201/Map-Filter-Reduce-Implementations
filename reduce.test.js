
const reduce = require('./reduce');

const sum = (s, v) => s + v;

describe('Error Conditions', () => {
    beforeAll(()=>{
        Array.prototype.reduce1 = reduce;
    });
    test('check if this exists, reduce is not called on null or undefined', ()=> {
        function init() {
            Array.prototype.reduce1.call(null, sum, 2)
        }
        expect(init).toThrow(TypeError);
    });
    test('Check if callback is a function', () => {
		expect(() => [].reduce1()).toThrow(TypeError);
	});
    test('Reduce on empty array with no initialValue', () => {
		expect(() => [].reduce1(sum)).toThrow(TypeError);
	});
});

describe('Reduce Functionality', () => {
    beforeAll(()=>{
        Array.prototype.reduce1 = reduce;
    });
    test('empty array and initalvalue, returns initial value', () => {
        var init = 10;
        expect( [].reduce1(sum, init) ).toBe(init);
    });
    test('invoked with initial value', () => {
        var caller = [1, 2, 3];
		expect(caller.reduce1(sum, 1)).toBe(7);
    });
    test('invoked without initial value', () => {
        var caller = [1, 2, 3];
		expect(caller.reduce1(sum, )).toBe(6);
    });
    test('custom test case | reduce promise', ()=>{
        function first(){
            return Promise.resolve(1);
        }
        function second(v) {
            return Promise.resolve(v + 2);
        }
        function third(v) {
            return Promise.resolve(v + 3);
        }
        function fourth(v) {
            return Promise.resolve(v + 4);
        }
        var promises = [first, second, third, fourth];
        var answer = promises.reduce1(
            (acc, current) => acc.then(current), Promise.resolve()
        );
        expect(answer).resolves.toEqual(10);
    });
});

