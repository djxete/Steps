// ----- VARIABLES ---

const prevBtn= document.getElementById("prev");
const nextBtn= document.getElementById("next");
const numbers= document.querySelectorAll(".number");
const progress = document.getElementById("progress");

console.log(numbers.length);


let empiezaVariable= 1;

//-- EVENT LISTENERS --

nextBtn.addEventListener("click", ()=>{

    empiezaVariable++;

    if(empiezaVariable > numbers.length){
       
        empiezaVariable = numbers.length;
    }
    
    update();

})


prevBtn.addEventListener("click", ()=>{

    empiezaVariable--;

    if(empiezaVariable < 1){
        empiezaVariable = 1;
        

    }

    update();
})


//-- FUNCIONES --

function update(){

    numbers.forEach((number,idx)=>{

        if(idx < empiezaVariable){
            number.classList.add("active");
        } else{
            number.classList.remove("active");
        }
    })

    

    const actives = document.querySelectorAll(".active");
    

    progress.style.width= (actives.length - 1) / (numbers.length - 1) * 100 + "%";



    if(empiezaVariable ===1){
        prevBtn.disabled = true;
       
    } else if(empiezaVariable === numbers.length){
        nextBtn.disabled = true;
        
    } else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;

    }



}


