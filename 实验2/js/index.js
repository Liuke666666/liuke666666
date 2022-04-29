var p1 = document.getElementById("p1");
p1.addEventListener("click", function (e) {
  this.style.color = "red";
  //alert( "1" );
});
var p2 = document.getElementsByTagName("li");
var date = document.querySelector("h1");
var d = new Date();

p2[1].addEventListener("click", function (e) {
  //alert( "2" );
  var year = d.getFullYear();
  var month = d.getMonth();
  var de = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  date.innerHTML =
    year +
    "-" +
    month +
    "-" +
    de +
    "  " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
});

p2[2].addEventListener("click", function (e) {
  //alert( "3" );
  p2[2].classList.add("fn-active");
});

var a1 = document.querySelector("ul");
p2[3].addEventListener("click", function (e) {
  //alert( "4" );
  if (p2.length > 7) {
    a1.removeChild(p2[7]);
  }
  setp();
});

p2[4].addEventListener("click", function (e) {
  //alert( "5" );
  window.open(
    "https://www.taobao.com/?spm=a2e15.8261149.1581860521.1.de7f29b4p1zTro"
  );
  setp();
});

p2[5].addEventListener("click", function (e) {
  //alert( "6" );
  var para = document.createElement("li");
  var node = document.createTextNode("p9");
  para.appendChild(node);
  a1.appendChild(para);
  setp();
});

var a2 = document.querySelector(".m-box");
p2[6].addEventListener("click", function (e) {
  //alert( "7" );
  var winWidth = window.screen.Width;
  var winHeight = window.screen.height;
  a2.style.width = winWidth + "px";
  a2.style.height = winHeight + "px";
});

function setp(e) {
  for (i = 0; i < p2.length; i++) {
    var item = p2[i];
    item.addEventListener("click", showMsg);
  }
}
setp();
function showMsg(e) {
  var item = e.target;
  console.log(p2.length);
  alert(item.innerHTML);
}
