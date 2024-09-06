// Script for the food menu
const btn_pizza = document.getElementById("btn_pizza");
const btn_salads = document.getElementById("btn_salads");
const btn_starter = document.getElementById("btn_starter");
const pizza = document.getElementById("pizza");
const salads = document.getElementById("salads");
const starter = document.getElementById("starter");
 
btn_pizza.addEventListener('click', ()=>{
    pizza.style.display='block';
    salads.style.display='none';
    starter.style.display='none';
})

btn_salads.addEventListener('click', ()=>{
    pizza.style.display='none';
    salads.style.display='block';
    starter.style.display='none';
})

btn_starter.addEventListener('click', ()=>{
    pizza.style.display='none';
    salads.style.display='none';
    starter.style.display='block';
})

// Add active class to the current button (highlight it)
const header = document.getElementById("buttons");
const btns = header.getElementsByClassName("btn");
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}