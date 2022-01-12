let card=document.querySelectorAll(".card");
let cardClicked=false;
let lockBoard=false;
let score=0;
let first,second;

function flipcard(){
    if(lockBoard) return;
    if(this===first) return;
    this.classList.add('fliped');

    if(!cardClicked){
        cardClicked=true;
        first=this;
    }else{
        cardClicked=false;
        second=this;
        lockBoard=true;
        findAmatch();

        // if(first.dataset.match === second.dataset.match){
        //     first.removeEventListener("click",flipcard());
        //     second.removeEventListener("click",flipcard());
        // }else{
        //     setTimeout(() => {
        //         first.classList.remove("fliped");     
        //         second.classList.remove("fliped");    
        //     }, 1500);   
        // }
    }
}
findAmatch=()=>{
    if(first.dataset.match === second.dataset.match){
        // match
        first.removeEventListener("click",flipcard());
        second.removeEventListener("click",flipcard());
        ReSetBoard();
    }else{
        // not a match
        setTimeout(() => {
            first.classList.remove("fliped");     
            second.classList.remove("fliped"); 
            ReSetBoard(); 
        }, 1500);   
    }
}

ReSetBoard=()=>{
    [lockBoard,cardClicked]=[false,false];
    [first,second]=[null,null];
}

(function Order(){
    card.forEach(card=>{
        let randomPos=Math.floor(Math.random()*12);
        card.style.order=randomPos;
    });
})();

card.forEach(card=>card.addEventListener("click",flipcard))
