function DarkThoughts() {
    const audioPlayer = document.getElementById("audioPlayer3");

    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();  
    } else {
        audioPlayer.pause();
    }
}
