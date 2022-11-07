let n = 1

window.addEventListener("load", _ => {

    let textbox = document.querySelector("#textbox")
    textbox.autofocus = true

    let b = document.querySelector("body")
    b.onclick = e1 => {textbox.focus()}

    document.querySelectorAll(".letter").forEach(o => {
        if (o.id == "none"){return}
        o.classList.add("filled")
        o.addEventListener("click", e => {
            let element = e.target
            textbox.value += element.innerText
        })
    })

    document.querySelectorAll(".dia").forEach(o => {
        if (o.id == "none"){return}
        o.addEventListener("click", e=> {
            let element = e.target
            textbox.value += element.id
        })
    })

    document.querySelector("#aright").addEventListener("click", e => {
        let one = document.querySelector("#bottom1")
        let two = document.querySelector("#bottom2")
        let three = document.querySelector("#bottom3")

        if (n==1) {
            one.style.display = "none"
            two.style.display = "block"
            three.style.display = "none"
            n++
        } else if (n==2) {
            one.style.display = "none"
            two.style.display = "none"
            three.style.display = "block"
            n++
        } else {
            one.style.display = "block"
            two.style.display = "none"
            three.style.display = "none"
            n = 1
        }
    })
    document.querySelector("#aleft").addEventListener("click", e => {
        let one = document.querySelector("#bottom1")
        let two = document.querySelector("#bottom2")
        let three = document.querySelector("#bottom3")

        if (n==1) {
            one.style.display = "none"
            two.style.display = "none"
            three.style.display = "block"
            n = 3
        } else if (n==2) {
            one.style.display = "block"
            two.style.display = "none"
            three.style.display = "none"
            n--
        } else {
            one.style.display = "none"
            two.style.display = "block"
            three.style.display = "none"
            n--
        }
    })
})