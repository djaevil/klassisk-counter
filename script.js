//Minus function!

function minus() {
    let number = document.getElementById("display-number").innerText;
    let newNumber = parseInt(number) - 1;
    document.getElementById("display-number").innerText = parseFloat(newNumber);
}

//Plus function!

function plus() {
    let number = document.getElementById("display-number").innerText;
    let newNumber = parseInt(number) + 1;
    document.getElementById("display-number").innerText = parseFloat(newNumber);
}

//Reset function!

function reset() {
    document.getElementById("display-number").innerText = "0";
}