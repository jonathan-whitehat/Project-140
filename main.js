function setup(){
  canvas = createCanvas(600,500);
  canvas.parent('canvas');

video = createCapture(VIDEO);
video.size(600, 500);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
  if(results.length > 0)
  {

    rightWristY = results[0].pose.rightWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw()
{
  image(video, 0, 0, 600, 500);
}