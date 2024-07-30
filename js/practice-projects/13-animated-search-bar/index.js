const searchbarContainer = document.querySelector(".searchbar-container");
const magnifier = document.querySelector(".magnifier");

magnifier.addEventListener("click", ()=>{
    searchbarContainer.classList.toggle("active");
});