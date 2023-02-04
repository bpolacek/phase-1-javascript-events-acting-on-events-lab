const dodger = document.getElementById('dodger');

 dodger.style.backgroundColor = "#FF69B4";
 dodger.style.left = "150px";

 //moving left START//
 document.addEventListener("keydown", function(e){
    if(e(key)==="ArrowLeft") {
        moveDodgerLeft();
 }
});

 function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
 }


 //Moving Right START

 document.addEventListener("keydown", function(e){
    if(e(key)==="ArrowRight") {
        moveDodgerRight();
 }
});

 function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left + 1}px`;
 }