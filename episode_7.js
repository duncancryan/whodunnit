let murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        let murderer = 'Colonel Mustard';

        const unexpectedOutcome = function () {
            murderer = 'Miss Scarlet';
        }

        unexpectedOutcome();
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// outcome will be Miss Scarlet, plotTwist reassignment only has block scope
// was Mr Green, I guess this is because plotTwist is called last but only has block scope?? so it overwrites the reassignment from unexpectedOutcome, but then has no scope outside the function??
// I'm really not sure on this one though....
// understand now