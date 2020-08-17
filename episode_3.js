let murderer = 'Professor Plum';

const declareMurderer = function () {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// I think that the first verdict will be Mrs Peacock 
// the second will be Professor Plum
// murderer is a let variable here so can be reassigned
// however, the reassignment in the declareMurderer function will only have function scope as a let is used inside the function