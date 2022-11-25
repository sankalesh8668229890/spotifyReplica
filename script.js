// console.log("hello everyone")
// initilise the variable
const songsIndex = 0;
let audioElement = new Audio("songs/1.mp3")
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif")
let myProgressBar = document.getElementById("myProgressBar")
let songItems = Array.from(document.getElementsByClassName("songItem"))

let songs = [
    {songsName: "sanam teri kasam",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songsName: "ek number",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songsName: "Haal-E-Dil(male)",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songsName: "Tera Chehra",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songsName: "Bewjaha",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"}
]

// iterate through array of songs
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;
});
// audioElement.play()
// Handle play/pause click;
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0;
    }
})
// listen to event
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    // update SeekBar
    songsTiming = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = songsTiming;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})