function handleClick1(){
    document.querySelector(".f-submit").classList.remove("d-none");
}
function handleClick2() {
    document.querySelector(".result-box").classList.remove("d-none");
    console.log("submit button clicked");
}

// Taking input for enter key pressed
var enter=document.querySelector(".input");
enter.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key=='Enter'){
        addDiv();
    }
})

// to add number of divs
var input = document.querySelector(".number");
let add = document.querySelector(".box");
let Submit = document.querySelector(".submit");
var container = document.querySelector(".box");
// var outerContauiner=document.querySelector(".options");
function addDiv() {
    let num = parseInt(input.value);
    console.log("Submit clicked");
    if(num<=0){
        alert("Value cannot be negative or zero !!!");
    }
    if (num>0) {
        console.log("user entered:", num);
        handleClick1();
    }
    else {
        console.error("Invalid Input");
    }
     // Clear existing content of the box
     container.innerHTML = '';
    //  outerContauiner.innerHTML='';
    // add.innerHTML="hello";
    for (let i = 1; i <=num; i++) {
        let div=document.createElement("div");
        div.innerHTML=`<section class="course">
        <div class="name">Course `+i+`</div>
        <select name="Grade" class="Grade">
            <option selected>Grade</option>
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="N">N</option>
        </select>
        <select name="credit" class="credit">
            <option selected>Credit</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="20">20</option>
        </select>
    </section>`;
    document.querySelector('.box').appendChild(div); 
    }
}
let num = parseInt(input.value);
// for calculating the gpa
document.querySelector(".result-box").innerHTML="your gpa here";
function calculateGPA() {
    handleClick2();
    let numerator = 0;
    let denominator = 0;
    let num = parseInt(input.value);
    
    for (let i = 1; i <= num; i++) {
        const G = document.querySelectorAll(".Grade")[i - 1].value;
        let gradeValue;
        switch (G) {
            case 'S':
                gradeValue = 10;
                break;
            case 'A':
                gradeValue = 9;
                break;
            case 'B':
                gradeValue = 8;
                break;
            case 'C':
                gradeValue = 7;
                break;
            case 'D':
                gradeValue = 6;
                break;
            case 'E':
                gradeValue = 5;
                break;
            case 'F':
                gradeValue = 4;
                break;
            case 'N':
                gradeValue = 0;
                break;
            default:
                gradeValue = 0;
        }
        const C = parseFloat(document.querySelectorAll(".credit")[i - 1].value);
        numerator += gradeValue * C;
        denominator += C;
    }
    
    const result = document.querySelector(".result-box");
    if (denominator !== 0) {
        result.innerHTML = "Your GPA: " + (numerator / denominator).toFixed(2);
    } else {
        result.innerHTML = "Unable to calculate GPA. Please enter credits.";
    }
}