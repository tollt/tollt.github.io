$("#enterbox").keyup(function(event) {
    if (event.keyCode === 13) {
        var inputVal = document.getElementById("enterbox").innerText
        document.getElementById("wordentered.strong").innerText = inputVal
        document.getElementById("enterbox").innerText = ""
    }
});