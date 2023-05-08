var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
recognition.onresult = function(event){
    console.log(event);
    var Content = event.result[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content=="take my selfie"){
        console.log("taking selfie ---");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthisis;
    speak_data = document.getElementById("textbox").value;
    speak_data="Taking your selfie in 5 second"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        
        take_snapshot();
        save();
    },5000)
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'=data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'=data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'=data_uri+'"/>';
        }
    })
}



