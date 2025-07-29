let total_amount=document.querySelector("#total_amount")
let amount=document.getElementById("amount");
let description=document.querySelector("#description")
let option=document.querySelector("#option")
let expense_summary=document.querySelector(".expense_summary")
let add_income_btn=document.querySelector("#add_income_btn");
let add_expense_btn=document.querySelector("#add_expense_btn");
let currenttotal=0

total_amount.innerText=currenttotal
add_income_btn.addEventListener("click",()=>{
    currenttotal+=parseFloat(amount.value)
    total_amount.innerText="₹" + currenttotal
    expense_summary.innerHTML+=`<h3 style="color:green">${option.value}     :    ${description.value}    :     ${amount.value}<br></h3>`;
    amount.value=''
    description.value=''
})
add_expense_btn.addEventListener("click",()=>{
    currenttotal-=parseFloat(amount.value)
    total_amount.innerText="₹" + currenttotal
    expense_summary.innerHTML+=`<h3 style="color:red">${option.value}     :    ${description.value}    :     ${amount.value}<br></h3>`;
    amount.value=''
})

