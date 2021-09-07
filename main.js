
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90

});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeshot(){
    Webcam.snap(function(data){
        document.getElementById("reslutpic").innerHTML = "<img id='picture' src='"+data+"'>";
    });
}

console.log("ml5 version:", ml5.version);
machine= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xZO8K4tHq/model.json",modelupload)

function modelupload(){
    console.log("modelloaded");
}


function check(){
    img= document.getElementById("picture");
    machine.classify(img, results);
}

function results(error, result){
if(error){
    console.error(error);
    
}
else {
console.log(result);
document.getElementById("resultofobject").innerHTML = result[0].label;
document.getElementById("resultofaccuracy").innerHTML = result[0].confidence.toFixed(3);
}
}
