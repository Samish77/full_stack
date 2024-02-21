// use of Ananomus function and Arrow function
const textBox=document.querySelector("#textBox");
const output=document.querySelector("#output");

textBox.addEventListener("keydown",(Event)=>{
    output.textContent=`You pressed "${Event.key}".`;
});