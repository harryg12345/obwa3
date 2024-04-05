status = "";
img = "";
detectionimg = [];
function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    objectd = ml5.objectDetector("cocossd", modelLoaded)
}
function modelLoaded() {
    console.log("model has loaded")
    document.getElementById("status").innerHTML = "status: starting object detection"
    status = true
    objectd.detect(img, gotresults)
}
function gotresults(error, result){
    if (error) {
        console.error(error)
    }
    else {
        console.log(result);
        detectionimg = result
    }
}
function preload() {
    img = loadImage("bedroom.jpeg")
}

function draw(){
    image(img, 0, 0, 640, 420)
 if (status != "") {
for(i = 0; i < detectionimg.length; i++){
   objname = detectionimg[0].label;
   objx = detectionimg[0].x
   objy = detectionimg[0].y
   objcon = floor(detectionimg[0].confidence*100)
   objw = detectionimg[0].width
   objh = detectionimg[0].height
   fill("red")
   stroke("red")
   text(objname+" "+objcon+"%",objx+15,objy+15)
   textSize(25)
   noFill()
   rect(objx,objy,objw,objh)
   
}
 }
}


