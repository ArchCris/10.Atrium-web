/*Hero title chnaging effect*/
const palabras = ['ideas','thoughs','passions']
const frase = document.querySelector('.frase')
let i=0
let l=0

const loop = () =>{
   if(l>=palabras[i].length){
    i++
    l=0
    frase.innerHTML=""
   }
   if(i==palabras.length){
    l=0
    i=0
}
    frase.innerHTML+=palabras[i].split('')[l]
    l++
setTimeout(loop,1000)
}

loop()
/*Menu effect*/
const menu = document.querySelector(".menu")
const burger = document.querySelector(".burger")
const bars = document.querySelectorAll(".bar")

burger.addEventListener("click",()=>{
    menu.classList.toggle("menu-slide")
    bars.forEach(bar=>{bar.classList.toggle("white")})
})

