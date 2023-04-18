const rates = {"USD":1,"GBP":0.807,"INR":82.03,"JPY":133.31,"EUR":0.92}

var search = document.querySelector(".searchBox");
var from = document.querySelector(".from");
var to = document.querySelector(".to");
var convert = document.querySelector(".convert");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var change = document.querySelector(".exchange")
var resultFrom;
var resultTo;
var searchValue;


from.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

to.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

change.addEventListener('click',()=>{
    [from.value,to.value] = [to.value,from.value]
    resultFrom = from.value;
    resultTo = to.value;
});



search.addEventListener('input', updateValue);

function updateValue(e) {
    searchValue = e.target.value;
}

convert.addEventListener("click", getResults);

function getResults() {
    console.log(resultFrom)
    console.log(resultTo)
    let fromRate = rates[resultFrom];
    let toRate = rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(3)+" "+resultTo;
    console.log(finalValue)
    finalAmount.style.display = "block";
}

function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};