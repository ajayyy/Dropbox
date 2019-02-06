

var canvas = document.getElementById("canvas").getContext("2d");

//normal poop used in game
var poop = new Image();
poop.src = "poop transparent.png";

//poop used for menu (might be used ingame too)
var poopright = new Image();
poopright.src = "poop transparent right.png";
var poopleft = new Image();

poopleft.src = "poop transparent left.png";

var timer = 0;

var pooptype = false;

window.setInterval(update, 20);

var menu = true;

var music = new Audio("music.wav");
var loaded = 0;
music.loop = true;


function update(){
	  canvas.canvas.width  = window.innerWidth;
	  canvas.canvas.height = window.innerHeight;
	//clear screen
//	console.log(window.innerWidth+"s");
	canvas.clearRect(0,0,window.innerWidth,window.innerHeight);

	if(!menu){
		gupdate();
		return;
	}

	if(pooptype){
		canvas.drawImage(poopleft,window.innerWidth-poopright.width,0);
		canvas.drawImage(poopright,0,0);
	}else{
		canvas.drawImage(poopright,window.innerWidth-poopleft.width,0);
		canvas.drawImage(poopleft,0,0);
	}

	timer++;
	if(timer>18){
		timer = 0;
		pooptype = !pooptype;
	}
}

function playMusic() {
	music.play();
}
