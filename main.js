noseX = 0;
NoseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{ 
    background('#6C91C2'); 
    
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px"; 
    textSize(difference); 
    fill('#FFFF00'); //#FFE787
    text('RISHI', 50, 400); }

function preload()
{}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + NoseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWristX = " + rightWristX + "leftWristX = " + leftWristX + "difference = " + difference);
    }
}

//function draw() { background('#6C91C2'); document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px"; textSize(difference); fill('#FFE787'); text('Peter', 50, 400); }