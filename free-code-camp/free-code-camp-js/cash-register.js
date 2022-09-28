function checkCashRegister(price, cash, cid) {
  const coin = logCoins(cid);

  const changeToGive = Math.round((cash - price) * 100) / 100;
  const availableCash = getAvailableCash(coin, changeToGive);

  let givenChange = 0;
  let change = [];
  let allMoney = [];

  if (insufficientFunds(availableCash, changeToGive)) {
    return { status: "INSUFFICIENT_FUNDS", change: change };
  } else {
    for (let i = 8; i >= 0; i--) {
      if (coin[i].value <= changeToGive) {
        let k = 0;
        while (
          changeToGive > givenChange &&
          k < coin[i].amount &&
          changeToGive >= Math.round((givenChange + coin[i].value) * 100) / 100
        ) {
          givenChange += coin[i].value;
          k++;
        }

        if (k !== 0) {
          change.push([coin[i].type, k * coin[i].value]);
        }
      }
      allMoney.unshift([coin[i].type, coin[i].availableValue]);
    }

    givenChange = Math.round(givenChange * 100) / 100;

    return sufficientFunds(
      givenChange,
      changeToGive,
      availableCash,
      change,
      allMoney
    );
  }
}
class Coin {
  constructor(type, value, availableValue) {
    this.type = type;
    this.value = value;
    this.availableValue = availableValue;
    this.amount = Math.round(availableValue / value);
  }
}

function logCoins(cid) {
  const PENNY = new Coin("PENNY", 0.01, cid[0][1]);
  const NICKEL = new Coin("NICKEL", 0.05, cid[1][1]);
  const DIME = new Coin("DIME", 0.1, cid[2][1]);
  const QUARTER = new Coin("QUARTER", 0.25, cid[3][1]);
  const ONE = new Coin("ONE", 1, cid[4][1]);
  const FIVE = new Coin("FIVE", 5, cid[5][1]);
  const TEN = new Coin("TEN", 10, cid[6][1]);
  const TWENTY = new Coin("TWENTY", 20, cid[7][1]);
  const ONEHUNDRED = new Coin("ONE HUNDRED", 100, cid[8][1]);

  return [PENNY, NICKEL, DIME, QUARTER, ONE, FIVE, TEN, TWENTY, ONEHUNDRED];
}

const getAvailableCash = (coin, changeToGive) => {
  let availableCash = 0;

  for (let j = 8; j >= 0; j--) {
    if (coin[j].value <= changeToGive) {
      availableCash += coin[j].availableValue;
    }
  }

  return Math.round(availableCash * 100) / 100;
};

const insufficientFunds = (availableCash, changeToGive) => {
  if (availableCash < changeToGive) {
    return true;
  }
};

const sufficientFunds = (
  givenChange,
  changeToGive,
  availableCash,
  change,
  allMoney
) => {
  if (givenChange === changeToGive && availableCash - changeToGive > 0) {
    return { status: "OPEN", change: change };
  } else if (givenChange === changeToGive && availableCash === changeToGive) {
    return { status: "CLOSED", change: allMoney };
  }
};
