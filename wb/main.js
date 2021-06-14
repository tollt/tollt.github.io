var txtFile = new XMLHttpRequest();
txtFile.open("GET", "https://tollt.github.io/tat.txt", true);
txtFile.onreadystatechange = function() {
    if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
        if (txtFile.status === 200) {  // Makes sure it's found the file.
            dic = txtFile.responseText;
            dic = dic.split("\n")
        }
    }
}
txtFile.send(null);

$(txt).on("keyup", function (e) {
    if (e.key == "Enter"){
        return
    }
    rgx = /[^A-Za-z\-']+/g
    txt=document.getElementById('txt')
    txt.value = txt.value.replace(rgx, '')
    document.getElementById('p').innerText = txt.value
});

$(txt).on("keydown", function (e) {
    if (e.key == "Enter"){
        txt=document.getElementById('txt').value.toUpperCase()
        p=document.getElementById('p')
        span=document.getElementById('span')
        for (var i = 0; i < dic.length; i++) {
            if (dic[i] == txt){
                p.hidden = true
                span.innerText = "✓"
                span.style.fontSize = 'xxx-large'
                document.getElementById('txt').value = ''
                setTimeout(() => {
                    span.innerText = " "
                    span.style.fontSize = 'large'
                    p.hidden = false
                }, 2000)
                break
            }
            if (i == dic.length - 1){
                p.hidden = true
                span.innerText = "X"
                span.style.fontSize = 'xxx-large'
                setTimeout(() => {
                    span.innerText = " "
                    span.style.fontSize = 'large'
                    p.hidden = false
                }, 2000)
                break
            }
          }

    }
});

