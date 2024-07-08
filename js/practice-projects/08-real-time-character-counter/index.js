const textareaEl = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

updateCounter()

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
});

function updateCounter(){
    totalCounter.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}