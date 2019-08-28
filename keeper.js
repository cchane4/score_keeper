
let player_1 = document.getElementById("p1"); 
let player_2 = document.getElementById("p2"); 
let p1_score = 0; 
let p2_score = 0; 
let p1_score_display = document.querySelector("#p1_score_display"); 
let p2_score_display = document.querySelector("#p2_score_display"); 



player_1.addEventListener("click", function(){ 
    p1_score++; 
 p1_score_display.textContent = p1_score; 
}); 

player_2.addEventListener("click", function(){ 
    p2_score++; 
 p2_score_display.textContent = p2_score; 
}); 

