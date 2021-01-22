import * as moment from "moment";
import * as $ from "jquery";

let speed = 1.0;

$(function () {
    const queryInfo = {
        active: true,
        currentWindow: true,
    };

    $("#speed").val(speed.toString());

    $("#setSpeed").click(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    speed: $("#speed").val().toString()
                },
                function (msg) {
                    console.log("result message:", msg);
                }
            );
        });
    });
});
