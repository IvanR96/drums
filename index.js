for(let i = 0; i < document.querySelectorAll('.drum').length; i++){
   document.querySelectorAll('.drum')[i].addEventListener('click', function (){
      let audio = new Audio('tom-1.mp3');
      audio.play();

   }); 
}

