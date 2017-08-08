function playSound(id){
var sound = new Audio("sounds/"+id+".wav");
sound.play();
}

//Linking sounds to event clicks
document.getElementById("actually").addEventListener("click", function(){
    playSound("actually");
});

document.getElementById("eee").addEventListener("click", function(){
    playSound("eee");
});

document.getElementById("lancesandwich").addEventListener("click", function(){
    playSound("lancesandwich");
});

document.getElementById("metaphysically").addEventListener("click", function(){
    playSound("metaphysically");
});

document.getElementById("ohno").addEventListener("click", function(){
    playSound("ohno");
});

document.getElementById("ok").addEventListener("click", function(){
    playSound("ok");
});

document.getElementById("okbye").addEventListener("click", function(){
    playSound("okbye");
});

document.getElementById("thatsnotgood").addEventListener("click", function(){
    playSound("thatsnotgood");
});

document.getElementById("ube").addEventListener("click", function(){
    playSound("ube");
});

document.getElementById("yolanda").addEventListener("click", function(){
    playSound("yolanda");
});
