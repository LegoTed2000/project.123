leftwristX = 0;
rightwrist = 0;
difference = 0;


function setup() {
    canvas = createCanvas(800, 800);
    canvas.position(1500, 250);
    video = createCapture(VIDEO);
    video.size(1000, 1000);
    video.position(300, 150);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotPosses);
}

function draw() {
    document.getElementById("font_size");
        background("yellow");
        text("Hello", 200, 400);

    fill(50, 92, 168);
    stroke(5, 241, 245);
    textSize(difference);
}

function modelloaded() {
    console.log("THE MODEL HAS LOADED!!!!!! YAY =0");
}

function gotPosses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwrist = " + leftwristX + "rightwrist = " + rightwristX + "difference = " + difference);
    }
}