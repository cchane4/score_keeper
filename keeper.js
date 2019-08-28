
let player_1 = document.getElementById("p1"); 
let p1_score = 0; 
let p1_score_display = document.querySelector("#p1_score_display"); 



player_1.addEventListener("click", function(){ 
    p1_score++; 
 p1_score_display.textContent = p1_score; 
}); 

