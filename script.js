document.querySelector("a").addEventListener("click", function(event){

   event.target.textContent = "Už neklikej!";

})
document.querySelectorAll(".interactive").forEach(function (clickFce) {
    clickFce.addEventListener("click", function(event2){
        event2.target.textContent = "Klikni na text níže."
    })
})
