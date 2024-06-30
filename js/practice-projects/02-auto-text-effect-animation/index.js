const containerEl = document.querySelector(".container");

const careers = ["Web Designer", "Front-End Developer", "Graphic Designer", "Artist"];

let careerIdx = 0;
let charIdx = 0;

updateText();

function updateText(){
    charIdx++;
    containerEl.innerHTML = `<h1>I am ${careers[careerIdx].slice(0,1) === "A" ? "an" : "a"} ${careers[careerIdx].slice(0, charIdx)}<h1>`;
    

    if(charIdx === careers[careerIdx].length){
        careerIdx++;
        charIdx = 0;
    }

    if(careerIdx === careers.length){
        careerIdx = 0;
    }

    setTimeout(updateText, 400);
}