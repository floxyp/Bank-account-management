
class BankAccount {
    constructor(accountHolder, accountType) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = 1000.00; // Initial balance
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid deposit amount.");
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.balance) {
            throw new Error("Invalid withdrawal amount or insufficient funds.");
        }
        this.balance -= amount;
    }
}

const account = new BankAccount("Floxy Onyeka", "Savings");

function performTransaction() {
    const amount = parseFloat(document.getElementById("amount").value);
    const transactionType = document.getElementById("transaction-type").value;

    try {
        switch (transactionType) {
            case "deposit":
                account.deposit(amount);
                break;
            case "withdraw":
                account.withdraw(amount);
                break;
            case "balance":
                // Do nothing for balance check
                break;
            default:
                throw new Error("Invalid transaction type.");
        }

        // Update account details
        document.getElementById("balance").textContent = account.balance.toFixed(2);
        document.getElementById("transaction-status").textContent = "Transaction successful!";
        document.getElementById("new-balance").textContent = account.balance.toFixed(2);
        
                    

    } catch (error) {
        document.getElementById("transaction-status").textContent = "Error: " + error.message;
    }
}
