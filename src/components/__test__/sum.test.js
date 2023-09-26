import { sum } from "../sum";

test('Sum function shold calaculate the sum of two numbers', () => {
    const result = sum(3,4);

    //Asserton
    expect(result).toBe(7);
})