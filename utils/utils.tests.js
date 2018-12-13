const utils = require('./utils');
const expect = require('expect');
describe('Utils', () => {
    it('async add test', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done()
        });
    });

    it('async square test', (done) => {
        utils.asyncSquare(4, (sq) => {
            expect(sq).toBe(16).toBeA('number');
            done()
        });
    });


    it('addTest', () => {
        var res = utils.add(33, 12);
        expect(res).toBe(45).toBeA('number')

        // throw new console.error('FAIL TEST CASE');
        // if (res !== 45){
        // throw new Error(`Expected 44, but got ${res}`);
        // }
    });

    it('SqTest', () => {
        var res1 = utils.Square(10);
        expect(res1).toBe(100).toBeA('number')

        // throw new console.error('FAIL TEST CASE');
        //     if (res1 !== 100){
        //     throw new Error(`\"Expected 100, but got ${res1}\"`);
        // }



    });


});
describe('expect function practice', () => {
    describe('Test object with tobe and tonotbe', () => {
        it("expect some Object TB", () => {
            expect({ name: 'andrew' }).toBe({ name: 'andrew' })
        });
        it("expect some Object with TNB", () => {
            expect({ name: 'andrew' }).toNotBe({ name: 'andrew' })
        });
    });
    describe('Test object with toequal and tonotequal', () => {
        it("expect some Object with toEqual", () => {
            expect({ name: 'andrew' }).toEqual({ name: 'andrew' })
        });
    
        it("expect some Object with toNotEqual", () => {
            expect({ name: 'andrew' }).toNotEqual({ name: 'andrew' })
        });
    
    });
    it('dealing arrays toInc and toExc', () => {
        expect([2, 3, 4]).toInclude(5)
    });
    it('dealing arrays toInc and toExc', () => {
        expect([2, 3, 4]).toExclude(5)
    });
    it("expect some Object with toInc & toExc", () => {
        expect({ name: 'andrew', age: 25 }).toInclude({ age: 23 })
    });

    it("expect some Object with toInc & toExc", () => {
        expect({ name: 'andrew', age: 25 }).toExclude({ age: 23 })
    });

    it("expect some Number", () => {
        expect(12).toNotBe(11)
    });

    it('OWN TETS SETNAME OBJECT', () => {
        var user = { location: 'PHIL', age: 25 };
        var res = utils.setName(user, 'AB');
        expect(res).toInclude({
            firstname: 'A',
            lastname: 'B'
        })
    });

})


// //TOBE & NOTTOBE WORKS FOR NUMBERS BOOLEANS STRINGS BUT NOT FOR OBJECTS AND ARRAYS 
// //TOINCLUDE AND TOEXCLUDE WORKS ON OBJECTS AND ARRAYS