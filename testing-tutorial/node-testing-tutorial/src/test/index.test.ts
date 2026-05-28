
import {describe, expect, test, it} from '@jest/globals';
import {sum, mul} from '../index';

describe('Testing Sum function in index.ts file', () => {
    it('adds 1+2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
})

describe('testing mul function in index.ts file', () => {
    it("multiply 3*2 to equal 6", () => {
        expect(mul(3, 2)).toBe(6)
    })
})
// describe, test, it -> to leanr testing