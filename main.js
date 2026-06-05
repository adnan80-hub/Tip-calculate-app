let bill = document.querySelector(".bill-inp");
let amount = document.querySelector(".num-amount span");
let total = document.querySelector(".num-total span");

let people = document.querySelector(".people")
let select = document.querySelectorAll("ul li span");

let custom = document.querySelector(".custom");

let reset = document.querySelector(".reset");


let numSele = "";

select.forEach((ele, ind) => {
    ele.addEventListener("click", function (e) {
        numSele = parseInt(ele.textContent)
        console.log(numSele)

    })
})

let calc = "";

people.oninput = function () {
    if (people.value === "") return false;
    if (bill.value > 0) {
        calc = parseFloat(+bill.value * (numSele / 100)).toFixed(2);
        amount.textContent = parseFloat(calc / +people.value).toFixed(2);
        total.textContent = parseFloat((+bill.value + +calc) / people.value).toFixed(2)
    } else {
        return false;
    }

}

custom.oninput = function () {
    if (bill.value > 0) {
        calc = parseFloat(+bill.value * (numSele / 100)).toFixed(2);
        amount.textContent = parseFloat(calc / +people.value).toFixed(2);
        total.textContent = parseFloat((+bill.value + +calc) / people.value).toFixed(2)
    } else {
        return false;
    }
}

reset.onclick = function () {
    bill.value = "";
    people.value = "";
    amount.textContent = "0.00";
    total.textContent = "0.00";
}
