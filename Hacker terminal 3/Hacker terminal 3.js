alert("Updated, added Disconnect & change color");
alert("Click on start Button");
var i = 0;
var j = -1;
var txt = "Terminal(beta),🖥 #hackerterminal☠ ";
var speed = 75;
k=0;
txtz='███████████████';
speedz =500;
function enterthis(){
  if (i < txt.length) {
	document.getElementById("headerter").innerHTML += txt.charAt(i);
	i++;
	setTimeout(enterthis, speed);
  }
}
function arrowit(){
	j++;
	document.getElementById("content").innerHTML += "<div id='arrowit["+j+"]'><br/><b>::/SL/</b><input type='text' id='userinput["+j+"]' maxlength='25' autofocus/></div>";
	document.getElementById("userinput["+j+"]").focus();
	document.getElementById('startbutton').style.display = "none";
}
function runcode(){
		var audio = document.getElementById('audio');
		audio.volume="0.7";
	   audio.play();
	function progressit(){
	if(k > txtz.length){
		document.getElementById('content').innerHTML += "<br/>Already Connected to SERVER!!!!";
		arrowit();
		 }
	if(k < txtz.length){
		document.getElementById("content").innerHTML += txtz.charAt(k);
		setTimeout(progressit, speedz);
	}
	k++;
	if(k == txtz.length){
		document.getElementById('content').innerHTML += "<br/>Connected Established TO SERVER!";
  arrowit();
	}
}
	var inputz = ["list", "connect", "engage", "flip a coin", "fac", "roll a die", "rad", "random card", "rc", "properties", "screen", "disconnect", "change color", "cc"];
	var inputzz = document.getElementById("userinput["+j+"]").value;
	var input = inputzz.toLowerCase();
	document.getElementById("arrowit["+j+"]").style.display = "none";
	document.getElementById('content').innerHTML += "<br/><br/><b>::/SL/</b><input type='text' id='userinput["+j+"]' value='"+input+"' maxlength='25' autofocus />";
	if(input === "" || input === null){
		 document.getElementById('content').innerHTML += "<br/>No Input";
		document.getElementById("userinput["+j+"]").focus();
	}
	if(input == inputz[0]){
		document.getElementById('content').innerHTML += "<br/><ul><li>List</li><li>Connect</li><li>Disconnect</li><li>Engage</li><li>Flip a coin</li><li>Roll a die</li><li>random card</li><li>Properties</li><li>Screen</li><li>Change Color</li></ul>Write Any one of these commands";
		document.getElementById("userinput["+j+"]").value = "list";
	}
	else if(input == inputz[1]){
	   document.getElementById('content').innerHTML += "<br/>";
			progressit();
			return true;  
	}
	else if(input ==inputz[2]){
	   alert("A Simple Screen Clear"); document.getElementById('content').innerHTML = "";
	}
	else if(input == inputz[3] || input == inputz[4]){
		var flipacoina = ["Heads", "Tails"];
		var flipacoinb = flipacoina[Math.floor(Math.random() * flipacoina.length)];
		document.getElementById("content").innerHTML += "<br/>"+flipacoinb;
	}
	else if(input == inputz[5] || input == inputz[6]){
		var rolladie = ["1", "2", "3", "4", "5", "6"];
		var rolladieaa = rolladie[Math.floor(Math.random() * rolladie.length)];
		document.getElementById("content").innerHTML += "<br/>"+rolladieaa;
  
	}
	else if(input == inputz[7] || input == inputz[8]){
		var cardco = ["Spades", "Hearts", "Diamonds", "Clubs"];
		var randomcarda = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
		var cardnum = cardco[Math.floor(Math.random() * cardco.length)];
		var cardnuma = randomcarda[Math.floor(Math.random() * randomcarda.length)];
		document.getElementById("content").innerHTML += "<br/>"+cardnuma+ " of "+cardnum;
	}
	else if(input == inputz[9]){
		document.getElementById('content').innerHTML += "<br/><b><ul><li>Browser Name -> " + navigator.appName+"</li><li>Version Info -> " + navigator.appVersion+"</li><li>Cookies Enabled -> " + navigator.cookieEnabled+"</li><li>Language of the browser -> " + navigator.language+"</li><li>Is the browser online? " + navigator.onLine+"</li><li>Platform -> " + navigator.platform+"</li><li>Browser's Engine Name -> " + navigator.product+"</li><li>User-agent header sent -> " + navigator.userAgent+"</li></ul></b>";
  
	}
	else if(input == inputz[10]){
		document.getElementById('content').innerHTML += "<ul><li>Available Height -> " + screen.availHeight+"</li><li>Available Width -> " + screen.availWidth+"</li><li>Color Depth ->" + screen.colorDepth+"</li><li>Total Height -> " + screen.height +"</li><li>Color Resolution -> " + screen.pixelDepth+"</li><li>Total Width -> " + screen.width+"</li></ul>";
	}
	else if(input == inputz[11]){
		k = 0;
		document.getElementById('content').innerHTML += "<br/>You are disconnected!";
	}
	else if(input == inputz[12] || input == inputz[13]){
		var r =  Math.floor(Math.random() * 255);
		var g =  Math.floor(Math.random() * 255);
		var b =  Math.floor(Math.random() * 255);
		document.getElementById('body').style.color = "rgb("+ r +","+g+","+b+")";
		document.getElementById('content').innerHTML += "<br/>Done!<br/><i>Not changing the color of input, it would be difficult to read if font color is dark.</i><br/>It is purely random color!";
		}
	else{
		document.getElementById('content').innerHTML += "<br/>Invalid Input<br/><b>Type in 'list'</b>";
	}
	  
	   arrowit();
}