const arrows = document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list");
arrows.forEach((arrow,i)=>{

const num =movieLists[i].querySelectorAll("img").length;
let counter =0;

arrow.addEventListener("click",()=>{
    const ratio=Math.floor(window.innerWidth/270);
    counter++;
    if(num-(4+counter)+(4-ratio)>=0){
    movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    }
    else{
        movieLists[i].style.transform="translateX(0)";
        counter=0;
    }
});
 console.log(movieLists[i].querySelectorAll("img").length)
});
const ball= document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-icon,.toggle");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})