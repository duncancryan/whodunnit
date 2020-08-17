let murderer = 'Colonel Mustard';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        murderer = 'Mrs. White';
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// verdict will be Mrs White, plotTwist being called in changeMurderer acts as final reassignment and variable is let