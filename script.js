//   FirstClass Ticket Handler code starting here   
document.getElementById('FirstClassInput-decrease').addEventListener('click', function(){
    handleFirstClassTicketCount(false);                       
})
document.getElementById('FirstClassInput-increase').addEventListener('click', function(){
    handleFirstClassTicketCount(true);                             
})

// Creating a function for First-Class ticket 
function handleFirstClassTicketCount(isIncrease){
    const inputCount = document.getElementById('firstClass-input');
    const countNumber = parseInt(inputCount.value);
    let newCount = countNumber;
    if(isIncrease == true){
        newCount = countNumber + 1;
    }
    if(isIncrease == false && countNumber > 0){
        newCount = countNumber - 1;
    }
    inputCount.value = newCount;

    const subtotal = newCount * 150 ;
    const vat = subtotal / 10 ;
    const total= subtotal + vat;
    
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;
    calculateTotal();  // Calling total calculation Function
}


// Economy Ticket Javascript code 
document.getElementById('economyInput-increase').addEventListener('click',function(){
    handleEconomyTicketCount(true);
    
})
document.getElementById('economyInput-decrease').addEventListener('click',function(){
    handleEconomyTicketCount(false);
    
})
// Creating a Function for Economy Ticket
function handleEconomyTicketCount(isIncrease){
    const inputCount = document.getElementById('economy-input');
    const countNumber = parseInt(inputCount.value);
    let newCount = countNumber;
    if(isIncrease == true){
        newCount = countNumber + 1;
    }
    if(isIncrease == false && countNumber > 0){
        newCount = countNumber - 1;
    }
    inputCount.value = newCount;

    const subtotal = newCount * 100 ;
    const vat = subtotal / 10 ;
    const total= subtotal + vat;

    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;
    calculateTotal(); // Calling total calculation Function
}
// Creating total Calculation Function       
function calculateTotal() {
const firstClassTicketInput = document.getElementById('firstClass-input').value;
const firstClassTicketCount = parseInt(firstClassTicketInput);
const economyClassTicketInput = document.getElementById('economy-input').value;
const economyClassTicketCount = parseInt(economyClassTicketInput);

let total = firstClassTicketCount * 150 + economyClassTicketCount * 100;
let vat = total * .1;
let grandTotal = total + vat;

const subTotalValue = document.getElementById('subtotal').innerText = total;
const subTotalAmount = parseFloat(subTotalValue);

const vatTotalValue = document.getElementById('vat').innerText = vat;
const vatTotalAmount = parseFloat(vatTotalValue);

const totalValue = document.getElementById('total').innerText = grandTotal;
const totalAmount = parseFloat(totalValue);
}
// Book Button JavaScript code 
document.getElementById('bookButton').addEventListener('click',function(){
    const bookButton = document.getElementById('content');
    bookButton.style.display='none';
    const formInfo = document.getElementById('form-info');
    formInfo.style.display='none';
    const congratulation = document.getElementById('congratulation');
   congratulation.style.display= 'block';
   
})