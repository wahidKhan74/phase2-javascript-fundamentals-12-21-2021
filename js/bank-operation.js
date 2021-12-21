// global accounts array
let accounts = [
    { accNo:100, name:"Mike Smith", balance:45656.56},
    { accNo:101, name:"David Miller", balance:34568.45},
    { accNo:102, name:"Aria Smith", balance:2343434.456},
    { accNo:103, name:"Will Smith", balance:423543.5},
    { accNo:104, name:"Kim Joe", balance:23423.454}
];

// show balance
function showBalance() {
    let accId = prompt("Enter Account Id :");
    let account = findAccount(accId);
}

// withdraw
function withdraw() {
    let accId = prompt("Enter Account Id :");
    let amount = prompt("Enter Amount to withdraw :");
    let account = findAccount(accId);
    account.balance = account.balance - Number(amount);
    console.log(`The user ${accId}, ${account.name} has balance new updated ${account.balance}`);
}


// deposit


// find account
function findAccount(accId) {
    let match =0;
    for(let acc of accounts) {
        if(acc.accNo == accId){
            console.log(`The user ${accId}, ${acc.name} has balance ${acc.balance}`);
            match++;
            return acc;
        }
    }
    if(match==0){
        console.log("The user does not exist with id",accId);
    }
    return;
}
