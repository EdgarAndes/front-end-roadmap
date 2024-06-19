const inputEl = document.querySelector('.input');
const bodyEl= document.querySelector('body');

inputEl.checked = JSON.parse(localStorage.getItem('mode'));

updateBody();

// inputEl.checked = false; 
// check if the if-statement fo this function is working
function updateBody(){
    if (inputEl.checked){
        bodyEl.style.backgroundColor = '#373A40';
    }else{
        bodyEl.style.backgroundColor = '#EEEEEE';
    }
}

inputEl.addEventListener('input', ()=>{
    updateBody();
    updateLocalstorage();
});

function updateLocalstorage(){
    localStorage.setItem('mode', JSON.stringify(inputEl.checked));
}