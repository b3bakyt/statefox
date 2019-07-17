function AtmState() {
    this.insertCard = function() {
    };
    this.ejectCard = function() {
    };
    this.insertPin = function() {
    };
    this.requestCash = function() {
    };
}

function HasCard() {
    this.insertCard = function() {
        console.log('is ON');
    };
    this.ejectCard = function() {
        console.log('is ON');
    };
    this.insertPin = function() {
        console.log('is ON');
    };
    this.requestCash = function() {
        console.log('is ON');
    };
}
HasCard.prototype = new AtmState();
HasCard.prototype.constructor = HasCard;

function NoCard() {
    this.insertCard = function() {
        console.log('is ON');
    };
    this.ejectCard = function() {
        console.log('is ON');
    };
    this.insertPin = function() {
        console.log('is ON');
    };
    this.requestCash = function() {
        console.log('is ON');
    };
}
NoCard.prototype = new AtmState();
NoCard.prototype.constructor = NoCard;

function HasPin() {
    this.insertCard = function() {
        console.log('is ON');
    };
    this.ejectCard = function() {
        console.log('is ON');
    };
    this.insertPin = function() {
        console.log('is ON');
    };
    this.requestCash = function() {
        console.log('is ON');
    };
}
HasPin.prototype = new AtmState();
HasPin.prototype.constructor = HasPin;

function HasCash() {
    this.insertCard = function() {
        console.log('is ON');
    };
    this.ejectCard = function() {
        console.log('is ON');
    };
    this.insertPin = function() {
        console.log('is ON');
    };
    this.requestCash = function() {
        console.log('is ON');
    };
}
HasCash.prototype = new AtmState();
HasCash.prototype.constructor = HasCash;

function NoCash() {
    this.insertCard = function() {
        console.log('is ON');
    };
    this.ejectCard = function() {
        console.log('is ON');
    };
    this.insertPin = function() {
        console.log('is ON');
    };
    this.requestCash = function() {
        console.log('is ON');
    };
}
NoCash.prototype = new AtmState();
NoCash.prototype.constructor = NoCash;

let getAtmStateMachine = () => {
    let hasCard = new HasCard();
    let noCard = new NoCard();
    let hasCorrectPin = new HasPin();
    let hasCash = new HasCash();
    let outOfMoney = new NoCash();

    let cashInMachine = 2000;
    let correctPinEntered = false;
    let currentState = this.noCard;

    return {
        setAtmState: (atmState) => {
            if (cashInMachine <= 0) {
                currentState = outOfMoney;
                return;
            }

            currentState = atmState;
        },
        setCashInMachine: (newCash) => {
            cashInMachine += newCash;
        },
        insertCard: () => {
            currentState.insertCard();
        },
        ejectCard: () => {
            currentState.ejectCard();
        },
        insertPin: (pin) => {
            currentState.insertPin(pin);
        },
        requestCash: (cashToWithdraw) => {
            currentState.requestCash(cashToWithdraw);
        },
        getYesCardState: () => hasCard,
        getNoCardState: () => noCard,
        getHasCorrectPin: () => hasCorrectPin,
        getNoCashState: () => outOfMoney,
    };
};