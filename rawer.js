function rawer1() {
    const audioPlayer = document.getElementById("rawerz");

    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();  
    } else {
        audioPlayer.pause();
    }
}