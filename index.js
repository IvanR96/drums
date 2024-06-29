for(let i = 0; i < document.querySelectorAll('.drum').length; i++){
   document.querySelectorAll('.drum')[i].addEventListener('click', function (){
      let buttonInnerHTML = this.innerHTML;
      
      switch(buttonInnerHTML){
         case "w":
            let audio = new Audio('tom-1.mp3');
            audio.play();
            break;
         case "a":
            let audio1 = new Audio('tom-2.mp3');
            audio1.play();
            break;
         case "s":
            let audio2 = new Audio('tom-3.mp3');
            audio2.play();
            break;
         case "d":
            let audio3 = new Audio('tom-4.mp3');
            audio3.play();
            break;
         case "j":
            let audio4 = new Audio('crash.mp3');
            audio4.play();
            break;
         case "k":
            let audio5 = new Audio('snare.mp3');
            audio5.play();
            break;
         case "l":
            let audio6 = new Audio('kick-bass.mp3');
            audio6.play();
            break;
         default:
            break;

            

      }
      

   }); 
}

// factory example
/*function HouseKeeper(yearsOfXp, name, cleaningArea){
   this.yearsOfXp = yearsOfXp;
   this.name = name;
   this.cleaningArea = cleaningArea;
}*/