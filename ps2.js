let butt =document.getElementById("btn");
let song=document.getElementById("song");
 butt.addEventListener("click",()=>{
   song.currentTime=0;
   song.play();
   setTimeout(() => {
    song.pause();
   }, 10000);
   
 });