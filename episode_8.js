const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function () {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function (room) {
        if (scenario.room === room) {
            scenario.murderer = 'Colonel Mustard';
        }

        const unexpectedOutcome = function (murderer) {
            if (scenario.murderer === murderer) {
                scenario.weapon = 'Candle Stick';
            }
        }

        unexpectedOutcome('Colonel Mustard');
    }

    plotTwist('Dining Room');
}

const declareWeapon = function () {
    return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// have a couple of different ideas about this one, think it will be Lead Pipe over Candle Stick
// but if i am wrong I do think I know why
// I was wrong again, should have gone with gut instinct on this one, I think it's something to do with hoisting?
// in retrospect I don't think it can be to do with hoisting as none of the functions are named
// think I get this one, unexpected outcome only defined and called in plot twist, therefore colonel mustard set first (before UO even defined)
// then when UO is defined and called as part of plot twist, it is colonel mustard... 