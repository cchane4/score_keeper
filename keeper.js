let player_1 = document.getElementById("p1"); 
let p1_score = 0; 
let h1 = document.querySelector("h1"); 


player_1.addEventListener("click", function(){ 
    p1_score++; 
console.log("p1_score"); 
h1.textContent = p1_score; 
}); 

