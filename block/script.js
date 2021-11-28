var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    // Dont add the class if its already present
    // I wonder if this bit works?
    if ( character.classList != "animate" ) {
        character.classList.add("animate")
    }
    setTimeout(function(){

        character.classList.remove("animate");
    }
        , 500)
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));


    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    // If block left in 1-19
    // and 
    // character top is >- 130
    // then 
    // collision
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("you lose.");

    }
}, 10);
