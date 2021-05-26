document.getElementById("enterbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 13) {
        var inputVal = document.getElementById("enterbox").innerText
        document.getElementById("wordentered.strong").innerText = inputVal
        document.getElementById("enterbox").innerText = ""
    }
});