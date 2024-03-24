userInput = window.prompt();
let score = 0;
let hello = document.querySelector(".hello");




function counter() {
    let count = document.querySelector(".score");
    score++

    count.textContent = `hello ${userInput} you have clicked the Hi button ${score} times`;
    hello.insertAdjacentElement("afterend", count);
    
    if (score == 25){
        let message = document.querySelector(".message");

        message.textContent = 'Okay bruh go touch some grass';
        return (score = 0);
    }



}
counter();