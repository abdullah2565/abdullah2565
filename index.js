let incomevalue = 0 
let expensevalue = 0
let profitvalue = 0

function updatevalue() {
    document.getElementById("income").innerText = incomevalue;
    document.getElementById("expense").innerText = expensevalue;
    document.getElementById("profit").innerText = profitvalue;
}

function addincome() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount >= 0) {
        incomevalue =+ amount;
        profitvalue =+ amount;
        updatevalue();
        
    }
    
}
function addexpense() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount >= 0) {
        expensevalue =+ amount;
        profitvalue -= amount;
        updatevalue();
        
        
    }
    
}