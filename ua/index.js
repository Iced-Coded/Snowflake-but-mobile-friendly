window.onload = choosePic;

var Pictures = new Array("../img/Internet.png", "../img/Server.png", "../img/Global.png", "../img/Person.png", "../img/Static.png", "../img/Computing.png", "../img/Domain.png")

function choosePic() {
    var randomNum = Math.floor(Math.random() * Pictures.length);
    document.getElementById("heroimg").src = Pictures[randomNum];
    document.getElementById("heroimg").classList.add("fade-up")
}