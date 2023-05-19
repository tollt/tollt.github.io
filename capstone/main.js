let ul = document.querySelectorAll("nav>ul>li")
for (let i = 0; i < ul.length; i++) {
    let bd = document.querySelectorAll("#bigdiv>*")
    ul[i].addEventListener("click", o=>{
        for (let j = 0; j < ul.length; j++) {
            ul[j].classList.remove("picked")
            bd[j].hidden = true
        }
        ul[i].classList.add("picked")


        bd[i].hidden = false
        bd[i].classList.add("shown")
    })
}