let buttons=document.querySelectorAll(".button");
let operator_buttons=document.querySelectorAll(".operation_button");
let screen=document.getElementById("screen");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let id=button.id;
        if(id === 'N1'){
            screen.innerText+="1";
        }else if(id === "N2"){
            screen.innerText+="2";
        }else if(id === "N3"){
            screen.innerText+="3";
        }else if(id === "N4"){
            screen.innerText+="4";
        }else if(id === "N5"){
            screen.innerText+="5";
        }else if(id === "N6"){
            screen.innerText+="6";
        }else if(id === "N7"){
            screen.innerText+="7";
        }else if(id === "N8"){
            screen.innerText+="8";
        }else if(id === "N9"){
            screen.innerText+="9";
        }else if(id === "N0"){
            screen.innerText+="0";
        }else if(id === "N."){
            screen.innerText+=".";
        }else if (id === "N=") {
            try {
                screen.innerText = eval(screen.innerText);
            } catch {
                screen.innerText = "Error";
            }
        }
    })
})


operator_buttons.forEach((operator_button)=>{
    operator_button.addEventListener("click",()=>{
        let operator_id=operator_button.id;
        if(operator_id === "add"){
            screen.innerText+="+";
        }else if(operator_id === "sub"){
            screen.innerText+="-";
        }else if(operator_id === "multipy"){
            screen.innerText+="*";
        }else if(operator_id === "division"){
            screen.innerText+="/";
        }
    })
})
