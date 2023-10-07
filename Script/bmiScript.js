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


const heightInput = document.querySelector("#bmi-height");
const weightInput = document.querySelector("#bmi-weight");
const result = document.querySelector("#results");
const calculateButton = document.querySelector("#calculateButton");

function calculateBMI(height, weight){
    if(isNaN(height) || isNaN(weight)){
        alert("Input has to be a number");
    }else{
        const bmi = weight / (height * height);

        const lowerBound = 18.5 * (height * height);
        const upperBound = 24.9 * (height * height);

        const weightToLose = weight - upperBound;
        const weightToGain = lowerBound - weight;
        if(bmi < 18.5){
            result.innerHTML = `BMI : ${bmi.toFixed(2)} <br> Underweight, Gain ${weightToGain.toFixed(2)} kgs to be within normal range.`;
        }else if(bmi > 24.9){
            result.innerHTML = `BMI : ${bmi.toFixed(2)} <br> Overweight, Lose ${weightToLose.toFixed(2)} kgs to be within normal range.`;
        }else{
            result.innerHTML = `BMI : ${bmi.toFixed(2)} <br> Congrats you are in normal range`;
        }
        
    }
}



calculateButton.addEventListener("click", ()=>{
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    calculateBMI(height, weight);
});