const murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// I think that the verdict will be "The murderer is Professor Plum."
// murderer is defined as a const here and thus cannot be reassigned, even by a function
// actually, instead of giving an output an error was thrown, but for the reason that I anticipated