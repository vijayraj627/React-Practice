import Sum from "../Sum";

test("Calculate the of two numbers", ()=>{

    const result = Sum(4,5);

    // Assertion
    expect(result).toBe(9)
})