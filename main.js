var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start() {
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    if (content == "take my selfie") {
        console.log("taking selfie");
        speak();

    }
    document.getElementById("textBox").innerHTML = content;
}

function speak() {
    var synth = window.speechSynthesis;
    var speakData = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        takeSnapshot();
        save();
    }, 5000);
}

function takeSnapshot() {
    Webcam.snap(function(dataURI) {
        document.getElementById("result").innerHTML = "<img id='selfieImage' src=" + dataURI + ">";
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src;
    link.href = image;
    link.click();
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");