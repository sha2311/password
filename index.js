const pass  = document.querySelector(".password");
const mass =  document.querySelector(".message");
const str = document.querySelector(".str");
const img = document.querySelector(".img");
const tost = document.querySelector(".tost");
const btn = document.querySelector(".btn");
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted'

btn.addEventListener("click", ()=>{
    showTost(successMsg);
})

function showTost(msg){
    let tostBox = document.createElement("div");
    tostBox.classList.add('tostBox');
    tostBox.innerHTML = msg
    tost.appendChild(tostBox);

    setTimeout(()=>{
        tostBox.remove()
    },4000)
}


img.addEventListener("click", ()=>{
    if(pass.type == "text"){
        pass.type = "password"
        img.src = "hide.png"

    }else{
        pass.type = "text"
        img.src = "show.png"
    }
})

pass.addEventListener("input", ()=>{
    if(pass.value.length > 0){
        mass.style.display = "block";
    }else{
        mass.style.display = "none";
    }
    if(pass.value.length < 5){
        str.innerHTML = "week";
        pass.style.borderColor = "#ff5925";
        mass.style.color = "#ff5925";
    }else if(pass.value.length >=5 && pass.value.length <8){
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        mass.style.color = "yellow";
    }else if( pass.value.length >=8){
       str.innerHTML = "strong"
       pass.style.borderColor = "#26d730";
       mass.style.color = "#26d730";
    }
})