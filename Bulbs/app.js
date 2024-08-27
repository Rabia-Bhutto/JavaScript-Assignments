var bulbImg = document.getElementById("bulb");
var off = document.getElementById("btnOff");
var on = document.getElementById("btnOn");

function bulbOff(){
    bulbImg.src = "Images/bulb-off.png";
    off.disabled = true;
    on.disabled = false;
}

function bulbOn(){
    bulbImg.src = "Images/bulb-on.png";
    off.disabled = false;
    on.disabled = true;
}


