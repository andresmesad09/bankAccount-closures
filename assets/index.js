function setCurrency() {
  const currency = document.getElementById("currency").value;
  return currency;
}

function setAmount() {
  const amount = parseInt(document.getElementById("amount").value);
  return amount;
}

function bankAccount() {
  usdAccount = 0;
  copAccount = 0;

  return {
    increase: function(account, amount) {
      if (account === 'cop') {
        copAccount += amount
      } else {
        usdAccount += amount
      }
    },
    getAmount: function(account) {
      if (account === 'cop') {
        return copAccount
      } else {
        return usdAccount
      }
    }
  };
}

let myBank = bankAccount()

function depositAndDisplay() {
  myBank.increase(setCurrency(), setAmount())
  account = setCurrency()
  total = myBank.getAmount(account)
  document.getElementById("amount").value = "";
  return `The new total of your ${account.toUpperCase()} account is ${total}`
}

module.exports = {setCurrency, setAmount, myBank, depositAndDisplay}