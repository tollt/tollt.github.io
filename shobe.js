function trolled(){
    h11 = document.getElementById("h11")
    but = document.getElementById("button")
    img = document.getElementById("img")

    but.disabled = true
    but.hidden = true
    h11.hidden = true
    img.hidden = false
    setTimeout(() => {
        but.disabled = false
        but.hidden = false
        h11.hidden = false 
        img.hidden = true
    }, 2000)
};  
function nt(){
    tb = document.getElementById("tb")
    title = document.getElementById("title")
    title.innerHTML = tb.value
    tb.value = ""
};
