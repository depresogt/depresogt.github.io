

function myTwentyFirstReason() {
    const audioPlayer = document.getElementById("audioPlayer1");

    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();  
    } else {
        audioPlayer.pause();
    }
}
