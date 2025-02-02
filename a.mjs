import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function multiply(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const convertedNumbers = numbers.map(num => {
        if (typeof num === "string") {
            const converted = Number(num);
            return converted;
        }
        return num;
    });

    if (convertedNumbers.some(num => typeof num !== "number" || isNaN(num))) {
        return NaN;
    }

    return convertedNumbers.reduce((acc, curr) => acc * curr);
}

//#endregion

//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Multiply function");

// Valid inputs
tests.isEqual(multiply(5, 5), 25, "Multiplying 5 and 5 should be 25");
tests.isEqual(multiply(3, 4), 12, "Multiplying 3 and 4 should be 12");
tests.isEqual(multiply("2", 3), 6, 'Multiplying "2" and 3 should be 6');
tests.isEqual(multiply("2", "3"), 6, 'Multiplying "2" and "3" should be 6');

// Invalid inputs
tests.isNotANumber(multiply("monkey", 2), 'Multiplying "monkey" and 2 should return NaN');
tests.isNotANumber(multiply(null, 3), "Multiplying null and 3 should return NaN");
tests.isNotANumber(multiply(undefined, 4), "Multiplying undefined and 4 should return NaN");
tests.isNotANumber(multiply(NaN, 5), "Multiplying NaN and 5 should return NaN");

// Edge cases
tests.isEqual(multiply(), 0, "Multiplying with empty parameter and 0 should return 0");
tests.isEqual(multiply(7), 7, "Multiplying single number should return that number");
tests.isEqual(multiply(0, 6), 0, "Multiplying by 0 should return 0");
tests.isEqual(multiply(Infinity, 2), Infinity, "Multiplying Infinity by positive should be Infinity");
tests.isEqual(multiply(Infinity, -8), -Infinity, "Multiplying Infinity by negative should be -Infinity");
tests.isEqual(multiply(-Infinity, -9), Infinity, "Multiplying -Infinity by negative should be Infinity");

//#endregion