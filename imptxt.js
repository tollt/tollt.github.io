var txtFile = new XMLHttpRequest();
txtFile.open("GET", "https://raw.githubusercontent.com/tollt/tollt.github.io/master/tat.txt", true);
txtFile.onreadystatechange = function() {
    if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
        if (txtFile.status === 200) {  // Makes sure it's found the file.
            allText = txtFile.responseText;
            document.getElementById("p").innerHTML = allText.replace(/\n/g, "<br>")
        }
    }
}
txtFile.send(null);
