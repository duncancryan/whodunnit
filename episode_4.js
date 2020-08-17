let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function () {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// first output will be "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard"
// second will be Mrs Peacock
// variables are lets so can be reassigned, but reassignment in declareAllSuspects only has function scope