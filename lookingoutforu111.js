

function lookingoutforuuuu() {
    const audioPlayer = document.getElementById("audioPlayer2");

    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();  
    } else {
        audioPlayer.pause();
    }
}
