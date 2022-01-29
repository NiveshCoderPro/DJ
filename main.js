song = "";


function preload() {
 

}

function setup() {
    canvas = createCanvas(400,400);
    video = createCapture(VIDEO);

    canvas.center();
    video.hide();
 posenet = ml5.poseNet('pose',gotPoses);
}


function gotPoses(results) {
    if (results.length >0) {
        console.log(results);
    }
}

function draw() {
    image(video,0,0,400,400);
}


