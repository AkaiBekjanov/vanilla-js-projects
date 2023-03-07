const qrSl=(q)=>document.querySelector(q);

const progressContainer=qrSl('.progress__container'),
      progress=qrSl('.progress'),
      audioPlayer=qrSl('.player_audio'),
      playBtn=qrSl('.btn.play'),
      title=qrSl(".title"), 
      cover=qrSl('.cover'),
      song=qrSl('.song'),
      nextBtn=qrSl('.btn.next'),
      prevBtn=qrSl('.btn.prev');
      

    console.log(qrSl('.audio__container'))
      

  
    
  
   





let songs=['./musics/Rema - Calm Down.mp3','./musics/Jax 02.14 - Себелеп.mp3'];


let currentSondIndex=0;





let isPlaying;


playBtn.addEventListener('click',()=>{
     isPlaying =playBtn.classList.contains('active');
     title.innerHTML=isPlaying ? "Now stopped" : "Now playing";

     if(!isPlaying){
        playMusic();
     }else {
       pauseMusic();
     }
     

})      

audioPlayer.addEventListener('timeupdate',()=>{
    let duration =audioPlayer.duration;
    let currentTime =audioPlayer.currentTime;
    let unitProgress = currentTime*100/duration;

    progress.style.width=unitProgress+"%";
})

nextBtn.addEventListener('click',nextSong);
prevBtn.addEventListener('click',prevSong);







    


    



function playMusic(){
    const duration=audioPlayer.duration;
    const currentTime=audioPlayer.currentTime;
    const unitProgress= currentTime*100/duration;

    playBtn.classList.add('active');
    audioPlayer.play();

    
    console.log("now playing ");
}
function pauseMusic(){
    playBtn.classList.remove('active');
    audioPlayer.pause();
    console.log("now paused");
}



function updateMusic(currentSong){
    song.innerHTML=currentSong.slice(9);
    title.innerHTML=isPlaying ? "Now stopped" : "Now playing";
    audioPlayer.src = currentSong;
    console.log('updated ',currentSong)
}



function nextSong(){
    currentSondIndex++;
    if(currentSondIndex>songs.length-1)return;
    pauseMusic()
    updateMusic(songs[currentSondIndex]);
}

function prevSong(){
    currentSondIndex--;

    if(currentSondIndex<0)return;
    pauseMusic()
    updateMusic(songs[currentSondIndex]);
}


1,2,3,4,5,6,7,8,9

function findMe(numbers,value){
    let first=0;
    let last=numbers.length;
    let middle=Math.floor((first+last)/2);

     
        while(first<last){
            if(numbers[middle]==value){
                return `found ${e[middle]} at ${i}`;
             }
             else if(numbers[middle]>value){
                last=middle-1;
             }
             else{
                first=middle+1;
             }
        }
    return console.log("excecuted");
}
findMe([1,2,3,4,5,6,7,8,9,10],3)