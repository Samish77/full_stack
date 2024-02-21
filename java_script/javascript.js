// use of Ananomus function and Arrow function
// const textBox=document.querySelector("#textBox");
// const output=document.querySelector("#output");

// textBox.addEventListener("keydown",(Event)=>{
    // output.textContent=`You pressed "${Event.key}".`;
// });

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }