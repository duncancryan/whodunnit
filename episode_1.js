const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function () {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// I think the output will be "The murderer is Miss Scarlet."
// this seems pretty unproblematic when it comes to scope 
// there are no variables defined inside the functions that will not be able to be accessed etc.

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