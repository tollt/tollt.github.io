$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        var inputVal = $(this).val();
        document.getElementById("wordentered.strong").innerText = inputVal
        document.getElementById("enterbox").innerText = ""
    }
});
