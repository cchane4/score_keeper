
let player_1 = document.getElementById("p1"); 
let player_2 = document.getElementById("p2"); 
let reset = document.getElementById("reset"); 
let p1_score = 0; 
let p2_score = 0; 
let p1_score_display = document.querySelector("#p1_score_display"); 
let p2_score_display = document.querySelector("#p2_score_display"); 
let game_over = false; 
let winning_score = 5; 



player_1.addEventListener("click", function(){ 
if (!game_over){ 
  p1_score++; 
if (p1_score === winning_score){ 
    game_over = true; 
    p1_score_display.classList.add("winner"); 
}
 p1_score_display.textContent = p1_score; 
} 
}); 


player_2.addEventListener("click", function(){ 
    if (!game_over){ 
        p2_score++; 
      if (p2_score === winning_score){ 
          game_over = true; 
          p2_score_display.classList.add("winner"); 

      }
       p2_score_display.textContent = p2_score; 
      } 
      }); 
      
      reset.addEventListener("click", function(){ 
        p1_score = 0; 
        p2_score = 0; 
        p1_score_display.textContent = 0; 
        p2_score_display.textContent = 0;
        p1_score_display.classList.remove("winner"); 
        p2_score_display.classList.remove("winner");
        game_over= false;  
         



      })