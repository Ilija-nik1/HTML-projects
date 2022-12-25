
// var power = 500;
// var num = 2n;

// for(var i=0; i<power; i++) num *= 3n;

var power = 500n;
num = 3n**power;


onload = ()=> {
    var pres = ""
    var cols = 50;
    for(var i=0; i< cols; i++) {
        pres += '<pre class="n"></pre>'
    }    
    
    document.querySelector("#wrap").innerHTML = pres;
    
    var n = document.querySelectorAll(".n");    
    for(var i=0; i< cols; i++) {
        var bi = BigInt(i)
        
        n[i].style.left = i + 'em';  
        n[i].style.animationDelay = Math.random()*5 + "s";
        setVendor(n[i], 'AnimationDelay', Math.random()*5 + 's');
        n[i].style.animationDuration = ((Math.random()*20)+30) + "s"; 
        setVendor(n[i], 'AnimationDuration', ((Math.random()*20)+30) + 's');
        n[i].innerText= num*(bi+1n);
    }
    
    function setVendor(element, property, value) {
      element.style["webkit" + property] = value;
      element.style["moz" + property] = value;
      element.style["ms" + property] = value;
      element.style["o" + property] = value;
    }
}