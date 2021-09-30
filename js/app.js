function getPin() {
    const pin = Math.round(Math.random() * 10000);
    // console.log(pin)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin)
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    // console.log(pin)
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log('clicked')
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        // console.log(number);
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        // console.log('matched')
        successNotification.style.display = 'block';
        failNotification.style.display = 'none';
    }
    else {
        // console.log('ops');
        failNotification.style.display = 'block';
        successNotification.style.display = 'none';
    }
}