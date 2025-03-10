//@ts-nocheck
let count = 0;

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
count = 0;
updateDisplay();
}

function updateDisplay() {
    const counterElement = document.getElementById('counter');
    counterElement.innerText = count;

    if (count < 0) {
        counterElement.style.color = 'red';
    } else if(count == 0) {
        counterElement.style.color = 'black';
    }
    else{
        counterElement.style.color = 'green';
    }
}