const bill = document.querySelector(".bills");
const customPerc = document.querySelector("#custom-percent");
const numPpl = document.querySelector('.numPeople');
const reset = document.querySelector("#reset-n");
const tipAll = document.querySelectorAll('input[type="radio"]');
let tipAmount = document.getElementById("insertA");
let totalAmount = document.getElementById("btn");

const radiosOnOff = () => {
    for (let i = 0; i < tipAll.length; i++) {
        tipAll[i].checked = false;
    }
}

const resetBtn = () => {
    if(reset.classList.contains('active')) {
        bill.value = null;
        numPpl.value = null;
        radiosOnOff();
        tipAmount.textContent = `$0.00`;
        totalAmount.textContent = `$0.00`;
        reset.classList.remove('active');
    }
}

(function () {
    const toggleRed = document.querySelector('.red-alert');
    document.addEventListener("keyup", (e) => {
        if(parseFloat(e.target.value) === 0) {
            toggleRed.classList.add('active');
        } else {
            toggleRed.classList.remove('active');
        }
    });
})();

(function () {
    customPerc.addEventListener('focus', radiosOnOff);
    for(let i =0; i < tipAll.length; i++){
        tipAll[i].addEventListener('change', () => {
            customPerc.value = null;
        })
    }
})();

(function () {
    const inputs = document.querySelectorAll('input');

    const getDigits = () => {
        // let test1 = bill.value;
        const rawBill = parseFloat(bill.value);
        const pplValue = parseFloat(numPpl.value);
        const tipValue = parseFloat((document.querySelector('input[name="tip-percentage"]:checked') || customPerc).value);
        const personTip = (rawBill * (tipValue / 100)) / pplValue;

        if((!isNaN(personTip)) && (personTip !== Infinity)) {
            tipAmount.textContent = `$${personTip.toFixed(2)}`;
            totalAmount.textContent = `$${((personTip + rawBill) / pplValue).toFixed(2)}`;
        } else {
            tipAmount.textContent = `$0.00`;
            totalAmount.textContent = `$0.00`;
        }

        if(rawBill || pplValue ||tipValue) {
            reset.classList.add('active');
        } else {
            reset.classList.remove('active')
        }

    }

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', getDigits);
        inputs[i].addEventListener('keyup', getDigits);
    }

    reset.addEventListener('click', resetBtn);
})();

console.log('helloworld')