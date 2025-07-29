let user_score=0
let computer_score=0

let rock=document.getElementById("rock")
let paper=document.getElementById("paper")
let scissors=document.getElementById("scissors")
let message = document.getElementById("msg_container")
let computer_score_para=document.getElementById("comp-score")
let user_score_para=document.getElementById("user-score")
let comp_chose_para=document.getElementById("comp_chose_para")
let submit_button=document.getElementById("submit_button")
let submit_msg=document.getElementById("submit_msg")

rock.addEventListener("click",()=>{
    let user_choice=0
    let computer_choice=Math.floor(Math.random() * 3)

    if(user_choice==computer_choice){
        message.innerText=("It's a draw")
        comp_chose_para.innerText="Computer Choices Rock"
        message.style.backgroundColor="grey"
    }
    else if (computer_choice==1){
        message.innerText=("You Lose this chance")
        comp_chose_para.innerText="Computer Choices Paper"
        message.style.backgroundColor="red"
        computer_score++
        computer_score_para.innerText=computer_score
    }else if (computer_choice==2){
        message.innerText=("You Won this chance")
        comp_chose_para.innerText="Computer Choices Scissors"
        message.style.backgroundColor="green"
        user_score++
        user_score_para.innerText=user_score
    }
})

paper.addEventListener("click",()=>{
    let user_choice=1
        let computer_choice=Math.floor(Math.random() * 3)

    if(user_choice==computer_choice){
        message.innerText=("It's a draw")
        comp_chose_para.innerText="Computer Choices paper"
        message.style.backgroundColor="grey"
    }
    else if (computer_choice==2){
        message.innerText=("You Lose this chance")
        comp_chose_para.innerText="Computer Choices Scissors"
        message.style.backgroundColor="red"
        computer_score++
        computer_score_para.innerText=computer_score
    }else if (computer_choice==0){
        message.innerText=("You Won this chance")
        comp_chose_para.innerText="Computer Choices Rock"
        message.style.backgroundColor="green"
        user_score++
        user_score_para.innerText=user_score
    }
})

scissors.addEventListener("click",()=>{
    let user_choice=2
        let computer_choice=Math.floor(Math.random() * 3)

    if(user_choice==computer_choice){
        message.innerText=("It's a draw")
        comp_chose_para.innerText="Computer Choices Scissors"
        message.style.backgroundColor="grey"
    }
    else if (computer_choice==0){
        message.innerText=("You Lose this chance")
        comp_chose_para.innerText="Computer Choices Rock"
        message.style.backgroundColor="red"
        computer_score++
        computer_score_para.innerText=computer_score
    }else if (computer_choice==1){
        message.innerText=("You Won this chance")
        comp_chose_para.innerText="Computer Choices Paper"
        message.style.backgroundColor="green"
        user_score++
        user_score_para.innerText=user_score
    }
})

submit_button.addEventListener("click",()=>{
    if(user_score>computer_score){
        submit_msg.innerText="You win the game!"
    }else if (user_score<computer_score){
        submit_msg.innerText="You lose the game!"
    }else{
        submit_msg.innerText="It's a Draw"
    }
})
