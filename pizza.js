// Script for the food menu
         var btn_pizza = document.getElementById("btn_pizza");
         var btn_salads = document.getElementById("btn_salads");
         var btn_starter = document.getElementById("btn_starter");
         var pizza = document.getElementById("pizza");
         var salads = document.getElementById("salads");
         var starter = document.getElementById("starter");
 
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
        var header = document.getElementById("buttons");
        var btns = header.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
          });
        }