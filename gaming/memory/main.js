window.addEventListener("load", function () {
    const COLUMNS = 6
    const ROWS = 3
    let clicked = false
    let clickedBack = false
    let last = false
    let canclick = true
    let images = ["ace.png", "two.png", "three.png", "four.png", "five.png", "six.png", "seven.png", "eight.png", "nine.png"]
    function generateNums(){
        q = Array.from(Array((ROWS * COLUMNS)/2).keys())
        q = q.concat(q)
        return q
    }
    function initializeCards(arr) {
        fin = arr || generateNums()
        for (let i = fin.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = fin[i];
            fin[i] = fin[j];
            fin[j] = temp;
        }
        return fin
    }
    let fincards = []
    let nums = initializeCards(initializeCards())
    rows = document.querySelectorAll(".row")
    for(let i = 0; i < rows.length; i++) {
        let currentRow = rows[i];
        for (let j=0; j < COLUMNS; j++){
            let div = document.createElement("div")
            div.id = "card" + (i*COLUMNS+j+1) //card's index i guess
            div.className = "card"
            currentRow.appendChild(div)
            let back = this.document.createElement("img")
            let num = this.document.createElement("img")
            back.src = "images/card-back2.png"
            back.classList.add("rotate")
            num.src = "images/" + images[nums[i*COLUMNS+j]]
            num.hidden = true
            div.appendChild(num)
            div.appendChild(back)
            div.addEventListener("click", e => {
                if (!canclick || last == div.id || fincards.includes(div.id)) {
                    return
                }
                num.hidden = false
                back.hidden = true
                if (clicked){
                    if (clicked.src == num.src){
                        fincards.push(div.id)
                        fincards.push(last)
                        clicked = false
                        last = false
                        canclick = true
                        if (fincards.length == ROWS*COLUMNS){
                            p = document.createElement("p")
                            p.textContent = "Winner!"
                            p.style.color = "#e18888"
                            document.querySelector("#game").appendChild(p)
                        }
                    } else {
                        canclick = false
                        setTimeout(() => {
                            num.hidden = true
                            back.hidden = false
                            clicked.hidden = true
                            clickedBack.hidden = false
                            clicked = false
                            clickedBack = false
                            last = false
                            canclick = true
                        }, 1250);
                    }

                } else {
                    clicked = num
                    clickedBack = back
                    last = div.id
                }
            })
        }
    }
    document.querySelector("#reset").onclick = () => {
        document.location.reload()
    }
/*    if (document.body.clientWidth < 850) {
        console.log("")
    }*/
}) 

