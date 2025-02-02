import test from "./test.mjs";

/*
    Challenge: Implement the `guessNumber` function.

    The function `guessNumber` takes two parameters:
    1. `target` (an integer) - the number to guess.
    2. `guess` (an integer) - the player's guess.

    The function should:
    - Return "Too low" if the guess is less than the target.
    - Return "Too high" if the guess is greater than the target.
    - Return "Correct!" if the guess matches the target.
    - Return null if either input is not a valid integer.

    Your task:
    1. Complete the tests below to verify the functionality.
    2. Implement the `guessNumber` function so it passes all the tests.
    
*/

//#region function -----------------------------------------------------------------
// Write your function her.

function guessNumber(target, guess) {
    if (!Number.isInteger(target) || !Number.isInteger(guess)) {
        return null;
    }

    if (guess < target) {
        return "Too low";
    } else if (guess > target) {
        return "Too high";
    } else {
        return "Correct!";
    }
}

//#endregion

//#region Tests --------------------------------------------------------------------

const tests = test("Guess Number function");

// Basic cases
tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

// Valid inputs
tests.isEqual(guessNumber(77, 7), "Too low", "If target is 77 and guess is 7, return 'Too low'");
tests.isEqual(guessNumber(3, 6), "Too high", "If target is 3 and guess is 6, return 'Too high'");
tests.isEqual(guessNumber(8, 8), "Correct!", "If target is 8 and guess is 8, return 'Correct!'");
tests.isEqual(guessNumber(0, 0), "Correct!", "Zero values should work, return 'Correct!'");
tests.isEqual(guessNumber(-5, -5), "Correct!", "Negative values should work, return 'Correct!'");
tests.isEqual(guessNumber(-1, -5), "Too low", "Negative value comparison should work, return 'Too low'");
tests.isEqual(guessNumber(-5, 1), "Too high", "Mixed negative and zero comparison should work, return 'Too high'");

// Invalid inputs
tests.isEqual(guessNumber(undefined, 7), null, "Undefined target should return null");
tests.isEqual(guessNumber(7, undefined), null, "Undefined guess should return null");
tests.isEqual(guessNumber(null, 8), null, "Null target should return null");
tests.isEqual(guessNumber(8, null), null, "Null guess should return null");
tests.isEqual(guessNumber(NaN, 9), null, "NaN target should return null");
tests.isEqual(guessNumber(9, NaN), null, "NaN guess should return null");

// Edge cases
tests.isEqual(guessNumber("6", 3), null, "String target should return null");
tests.isEqual(guessNumber(5, "2"), null, "String guess should return null");
tests.isEqual(guessNumber(3.3, 3), null, "Decimal number should return null");
tests.isEqual(guessNumber(2, 2.2), null, "Decimal number guess should return null");

//#endregion