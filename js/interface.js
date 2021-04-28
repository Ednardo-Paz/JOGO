document.addEventListener(`DOMContentLoaded`, ()=>{

    let squeres = document.querySelectorAll(`.squere`);

    squeres.forEach((squere)=>{
        squere.addEventListener(`click`, handleClick);

    })
     

})
function handleClick(event){
     let squere = event.target;
     let position = squere.id;

    if( handleMove(position)) {
        alert(`O jogo acabou.`)
    };
     updateSqueres(); 
}

function updateSqueres(){
    let squeres = document.querySelectorAll(`.squere`);
    squeres.forEach((squere)=> {
        let position = squere.id;
        let symbols = board[position];

        if(symbols != ''){
            squere.innerHTML = `<div class='${symbols}'></div>`
        }


    })
}