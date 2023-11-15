let accountPasswordEl = document.getElementById("accountPassword-el")
let accountNumberEl = document.getElementById("accountNumber-el")
let currentBalanceEl = document.getElementById("currentBalance-el")

let accountNumber = 04100236985762
accountNumberEl.textContent = "Account # " + accountNumber 

let accountBalance = 72900
currentBalanceEl.innerHTML = "Current Balance: Rs. " + accountBalance + " /-"

function depositAmount() {
    let depositedAmount = document.getElementById("depositAmount-el").value
    accountBalance += depositedAmount
    return accountBalance
}



