const butt = document.querySelector('.button');
butt.addEventListener('click', function(){
    const open = document.querySelector('.open');
    open.style.opacity = '0';
    open.style.zIndex = '-1';
    open.style.transition = 'all 0.5s';
})








function getComp(){
    //get comp choice
    var random = Math.random();
    if (random<0.33) return "rock";
    if (random>=0.33 && random<=0.66) return "paper";
    return "scissor";
};

function getResult(comp,player){
    //get result
    if (player==comp) return "TIE";
    if (player=="rock") return (comp=="paper")?"YOU LOSE":"YOU WIN";
    if (player=="paper") return (comp=="rock")?"YOU WIN":"YOU LOSE";
    if (player=="scissor") return (comp=="rock")?"YOU LOSE":"YOU WIN";
}

//get button and picture element
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissor = document.querySelector('.scissor');
var imgPlayer = document.querySelector('.q1')
var imgComp = document.querySelector('.q2')
var result = document.querySelector('.result')

//add event on elements
rock.addEventListener('click', function(){
    const compOpt = getComp();
    const playerOpt = rock.className;
    const fin = getResult(compOpt, playerOpt);
    imgPlayer.setAttribute("src", "img/rock.png");
    imgComp.setAttribute("src", "img/" + compOpt + ".png");
    result.innerHTML = fin;
});

paper.addEventListener('click', function(){
    const compOpt = getComp();
    const playerOpt = paper.className;
    const fin = getResult(compOpt, playerOpt);
    imgPlayer.setAttribute("src", "img/paper.png");
    imgComp.setAttribute("src", "img/" + compOpt + ".png");
    result.innerHTML = fin;

});

scissor.addEventListener('click', function(){
    const compOpt = getComp();
    const playerOpt = scissor.className;
    const fin = getResult(compOpt, playerOpt);
    imgPlayer.setAttribute("src", "img/scissor.png");
    imgComp.setAttribute("src", "img/" + compOpt + ".png");
    result.innerHTML = fin;
});