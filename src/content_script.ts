function setSpeed(speed: number): boolean {
    // @ts-ignore
    const frame = window.frames['kplayer_ifp']
    console.log(frame)
    console.log(frame.querySelector('video').onplay)
    return true;
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.speed) {
        console.log("Receive speed = " + msg.speed);
        if (setSpeed(msg.speed)) {
            sendResponse("Speed set to " + msg.speed);
        } else {
            sendResponse("Speed not set.");
        }
    }
});
