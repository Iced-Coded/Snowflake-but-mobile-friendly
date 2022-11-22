window.onload = choosePic;

// Normal Pictures
//var Pictures = new Array("img/Internet.png", "img/Server.png", "img/Global.png", "img/Person.png", "img/Static.png", "img/Computing.png", "img/Domain.png");

// Christmas Edition
var Pictures = new Array("img/christmas/tree.svg", "img/christmas/santa.svg")

function choosePic() {
    var randomNum = Math.floor(Math.random() * Pictures.length);
    document.getElementById("heroimg").src = Pictures[randomNum];
    document.getElementById("heroimg").classList.add("fade-up")
}

function darkMode() {
    $(".text-dark").addClass("text-secondary")
    $(".text-dark").removeClass("text-dark");
    $("#body").addClass("bg-dark");
}