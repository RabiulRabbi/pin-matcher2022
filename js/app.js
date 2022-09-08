function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        console.log('3 numbers of pin', pin);
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-value');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }else{
        const previousNumber = calcInput.value;
        calcInput.value = previousNumber + number;
    }
});
function verifyPin(){
    const displayPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-value').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyError = document.getElementById('notify-error');
    if(displayPin == typedPin){
        notifySuccess.style.display = "block";
        notifyError.style.display = "none";
    }else{
        notifyError.style.display = "block";
        notifySuccess.style.display = "none";
    }
}