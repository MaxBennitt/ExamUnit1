import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
    if (typeof name !== "string") {
        return null;
    }

    const trimmedName = name.trim();

    if (trimmedName === "") {
        return "";
    }

    if (new RegExp('[!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>/?]').test(trimmedName)) {
        return null;
    }

    return trimmedName
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

//#endregion

//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Format Name function");

// Valid inputs
tests.isEqual(formatName("Tim Tom"), "Tim Tom", "Names with spaces should work");
tests.isEqual(formatName("timmy"), "Timmy", "Single word should be capitalized");
tests.isEqual(formatName("james bond"), "James Bond", "Each word should be capitalized");
tests.isEqual(formatName("JAmEs bOND"), "James Bond", "Uppercase should be properly formatted");
tests.isEqual(formatName("billy ray cyrus"), "Billy Ray Cyrus", "Multiple words should be capitalized");

// Invalid inputs
tests.isEqual(formatName(null), null, "Null input should return null");
tests.isEqual(formatName(undefined), null, "Undefined input should return null");
tests.isEqual(formatName(123), null, "Number input should return null");
tests.isEqual(formatName({}), null, "Object input should return null");
tests.isEqual(formatName([]), null, "Array input should return null");
tests.isEqual(formatName("#Morris"), null, "Name with # should return null");
tests.isEqual(formatName("Tar$an"), null, "Name with $ should return null");
tests.isEqual(formatName("Hannah.Montana"), null, "Name with . should return null");
tests.isEqual(formatName("Jake!"), null, "Name with ! should return null");
tests.isEqual(formatName("Dr@ke"), null, "Name with @ should return null");

// Edge cases
tests.isEqual(formatName("  Jimmy  "), "Jimmy", "Extra spaces should be trimmed");
tests.isEqual(formatName("  Jimmy Jr  "), "Jimmy Jr", "Multiple spaces should be handled");
tests.isEqual(formatName(""), "", "Empty string should return empty string");
tests.isEqual(formatName("   "), "", "String with only spaces should return empty string");

//#endregion