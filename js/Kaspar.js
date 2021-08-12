const navSlide = () => {
    const burger = document.querySelector(`.burger`);
    const links = document.querySelector(`ul`);
    burger.addEventListener(`click`,()=>{
links.classList.toggle(`nav-active`)
    })
}
navSlide();

const menubtn=document.querySelector(`.burger`);
let menuOpen = false;

menubtn.addEventListener(`click`,()=>{
    if(!menuOpen){
        menubtn.classList.add(`open`);
        menuOpen=true;
    }else{
        menubtn.classList.remove(`open`);
        menuOpen=false;
    }
});

const search = () => {
    const searchico = document.querySelector(`.fas`);
    const border = document.querySelector(`.main-content`);
    searchico.addEventListener(`click`,()=>{
        border.classList.toggle(`search-active`)
    })
}
search();


// Video

var $polystar=$(`.polystar`)
$polystar.on(`mouseenter`,function(){
    $polystar.get(0).play();
});

$polystar.on(`mouseout`,function(){
    $polystar.get(0).pause();
})



window.addEventListener(`scroll`,function(){
    var header = document.querySelector(`header`);
    header.classList.toggle("sticky",window.scrollY > 0 );
    var lonks = document.querySelector(`ul`);
    lonks.classList.toggle("lonks-action",window.scrollY > 0 );
})