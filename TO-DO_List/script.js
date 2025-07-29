let add_task = document.getElementById("add_task");
let label = document.createElement("label");
let br = document.createElement("br");
let submit_btn = document.getElementById("submit_btn");
let tasks = document.querySelector(".tasks");
submit_btn.addEventListener("click", () => {
    let x = add_task.value;
    if (x != "") {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox"
        let label = document.createElement("label");
        let br = document.createElement("br");;
        label.textContent = " " + x;
        tasks.appendChild(checkbox);
        tasks.appendChild(label);
        tasks.appendChild(br);

        checkbox.addEventListener("click",()=>{
            if(checkbox.checked){
                label.style.textDecoration="line-through"
            }else{
                label.style.textDecoration="none";
            }
        });
        add_task.value="";
    }
});

