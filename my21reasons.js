function myTwentyFirstReason() {
    const audioPlayer = document.getElementById("audioPlayer1");

    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();  // Play the audio if paused or ended
    } else {
        audioPlayer.pause(); // Pause the audio if it's playing
    }
}
