function basterd() {
    const audioPlayer = document.getElementById("phonk1");
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play(); 
    } else {
        audioPlayer.pause();
    }
}

