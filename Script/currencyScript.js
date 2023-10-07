const dropdownContainer = document.querySelector(".dropdown-container");
const dropDownList = document.querySelector(".dropdown-list");
const dropDownTrigger = document.querySelector(".dropdown-trigger");

let isDropDownVisible = false;

dropDownTrigger.addEventListener("mouseenter", ()=>{
    dropDownTrigger.style.color = "#f95959";
});

dropDownTrigger.addEventListener("mouseleave", ()=>{
    dropDownTrigger.style.color = "#e3e3e3";
});

// Open dropdown list on click
dropDownTrigger.addEventListener("click", () =>{
    if(!isDropDownVisible){
        dropDownList.style.display = "block";
        isDropDownVisible = true;
        dropDownTrigger.style.color = "#e3e3e3";
    }else{
        dropDownList.style.display = "none";
        isDropDownVisible = false;
    }
});

// Close dropdown when clicking on window object
window.document.addEventListener("click", (event)=>{
    if(!dropdownContainer.contains(event.target)){
        dropDownList.style.display = "none";
        isDropDownVisible = false;
    }
});

// Prevent dropdown list from closing when clicking inside it
dropDownList.addEventListener("click", (event)=>{
    event.stopPropagation();
});

const convertButton = document.querySelector("#calculateButton");

convertButton.addEventListener("click", () => {
    const fromCurrency = document.querySelector("#select-from").value;
    const toCurrency = document.querySelector("#select-to").value;
    const amount = document.querySelector("#amount").value;

    const exchangeRates = {
        USD: 1,
        EUR: 0.9457,
        GBP: 0.8182,
        AED: 3.6725,
        SAR: 3.7500,
        QAR: 3.6400,
        OMR: 0.3845,
        KWD: 0.3092,
        BHD: 0.3760,
        JOD: 0.7090,
        LBP: 15000.0000,
        EGP: 30.8314,
        TRY: 27.6191,
        IRR: 41937.1484,
        JPY: 149.1258,
        MXN: 18.2126,
        CHF: 0.9112,
        CAD: 1.3681,
        CNY: 7.3103,
        ZAR: 19.3595,
        BRL: 5.1698,
        RUB: 100.6432,
        SGD: 1.3666,
        HKD: 7.8316,
        };

        if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
            alert("Invalid currency selection.");
            return;
        }else if(fromCurrency === toCurrency){
            alert("Both currencies cannot be the same.");
        }else{
        const convertedAmount = (amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(2);

        document.getElementById("results").textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
        }
    });