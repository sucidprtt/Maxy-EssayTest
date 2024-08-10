function isValidString(input) {
    const stack = [];
    const openingBrackets = ['<', '{', '['];
    const closingBrackets = ['>', '}', ']'];

    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            // Check if there is a corresponding opening bracket
            if (stack.length === 0) return false;

            let lastBracket = stack.pop();

            // Ensure the brackets are of the same type
            if (openingBrackets.indexOf(lastBracket) !== closingBrackets.indexOf(char)) {
                return false;
            }
        }
    }

    // Ensure all opened brackets are closed
    return stack.length === 0;
}

// Contoh penggunaan:
console.log(isValidString('[{}<>]')); // true
console.log(isValidString('[[{<>}<>]]')); // true
console.log(isValidString('{{[<>[{{}}]]}}')); // true
console.log(isValidString('][')); // false
console.log(isValidString('[>]')); // false
console.log(isValidString('[{}<[>]')); // false
