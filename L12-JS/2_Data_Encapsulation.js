//Create a function secureBankAccount that initiailizes a private balance and only allows deposit and withdrawl
function secureBankAccount(){
    let balance = 0
    function deposit(num){
        balance+=num
        return balance
    }
    function withdraw(num){
        if (num<=balance)balance-=num
        return balance
    }
    function getBal(){
        return balance
    }
    return {
        deposit,
        withdraw,
        getBal
    };
}

let account = secureBankAccount();
console.log(account.deposit(200))
console.log(account.withdraw(100))
console.log(account.getBal(100))