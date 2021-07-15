const billForm = document.getElementById('bill-divider');


const tipAll = document.querySelectorAll('.tipsy').value;
const tip_5 = document.getElementById('tip-5').value;
const tip_10 = document.getElementById('tip-5').value;
const tip_15 = document.getElementById('tip-5').value;
const tip_25 = document.getElementById('tip-5').value;
const total = document.getElementById('btn').value;


billForm.addEventListener('input', billHandler);

function billHandler (e) {
    e.preventDefault();
    console.log(e)

    const digits = getDigits();
}

function getDigits () {
    const bill = document.querySelector(".bills").value;
    const numPpl = document.querySelector('.numPeople').value;
}