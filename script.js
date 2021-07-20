const bill = document.querySelector(".bills");
const tipList = document.querySelectorAll('input[type="radio"]');
const custmPercent= document.getElementById('custom-percent');
const numPpl = document.querySelector('.numPeople');
let amount = document.getElementById('insertA');
let total = document.getElementById('btn');
const reset = document.getElementById('reset-n');

function onOff() {
    for(let i=0; i<tipList.length; i++){
        tipList[i].checked = false;
    }
}

const btnReset = () => {
    if(reset.classList.contains('active')) {
        bill.value = null;
        numPpl.value = null;
        onOff();
        amount.textContent = '$0.00';
        total.textContent = '$0.00';
        reset.classList.remove('active');
    }
}

(function () {
        const red = document.querySelector(".red-alert");
        document.addEventListener('keyup', (e) => {
            if(parseFloat(e.target.value) === 0){
                red.classList.add('active');
            } else {
                red.classList.remove('active');
            }
        })  
})();

(function () {
    custmPercent.addEventListener('focus', onOff);
    for(let i = 0; i < tipList.length; i++) {
        tipList[i].addEventListener('change', () => {
            custmPercent.value = null;
        })
    }
})();

(function () {
    const inputs = document.querySelectorAll('input');

    const getDigits = () => {
        const rawBill = parseFloat(bill.value);
        const pplCount = parseFloat(numPpl.value);
        const tipPercent = parseFloat((document.querySelector('input[name="tip-percentage"]:checked')
        || custmPercent).value);
        const tipPerPerson = (rawBill * (tipPercent / 100) /pplCount);

        if((!isNaN(tipPerPerson)) && (tipPerPerson !== Infinity)) {
            amount.textContent = `$${tipPerPerson.toFixed(2)}`;
            total.textContent = `$${((tipPerPerson + rawBill) / pplCount).toFixed(2)}`;

        } else {
            amount.textContent = `$0.00`;
            total.textContent = `$0.00`;
        }

        if(rawBill || pplCount || tipPerPerson){
            reset.classList.add('active');
        } else {
            reset.classList.remove('active');
        }
    }

    for(let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('change', getDigits);
        inputs[i].addEventListener('keyup', getDigits);
    }
    reset.addEventListener('click', btnReset)
})();