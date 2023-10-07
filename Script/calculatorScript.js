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



// Simple Calculator Script
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const buttonText = button.textContent;
        if(buttonText === "="){
            calculateResult();
        }else if(buttonText === "C"){
            clearDisplay();
        }
        else if(buttonText === "^"){
            addToDisplay("**");
        }
        else if(buttonText === "×"){
            addToDisplay("*");
        }
        else{
            addToDisplay(buttonText);
        }
    });
});

function calculateResult(){
    try{
    display.value = eval(display.value);
    }catch(error){
        display.value = "Error Ocurred";
    }
}

function clearDisplay(){
    display.value = "";
}

function addToDisplay(text){
    display.value += text;
}
