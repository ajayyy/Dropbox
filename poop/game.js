//different file for organisation only

var players = [new Player(), new Player()];

//called by main.js
function setup(){

}

//called by main.js
function gupdate(){
	for(var i=0;i<players.length;i++){
		ptick(players[i]);
	}
}