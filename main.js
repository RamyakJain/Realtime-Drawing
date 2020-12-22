function setup(){
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.position(400, 104)
    canvas = createCanvas(500, 400);
    canvas.position(700, 104);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background(51, 123, 218);
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}