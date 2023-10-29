
function setup(){
canvas=createCanvas(640,480);
canvas.position(420,200);
video=createCapture(VIDEO);
video.hide();
tintColor="";
}
function draw(){
image(video,150,150,320,240);
fill("purple");
circle(60, 98, 70);
fill("pink");
rect(45,124, 30, 310);
fill("purple");
circle(560, 98, 70);
fill("pink");
rect(90,84, 440, 30);
fill("purple");
circle(560, 465, 70);
fill("pink");
rect(547,124, 30, 310);
fill("purple");
circle(60, 456, 70);
fill("pink");

rect(90,440, 440, 30);
tint(tintColor);
}
function take_Snapshot(){
save("myPic_img.png")
}