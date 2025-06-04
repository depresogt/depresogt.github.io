function notionremix1() {
    const audioPlayer = document.getElementById("notionremiz");

    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();  
    } else {
        audioPlayer.pause();
    }
}