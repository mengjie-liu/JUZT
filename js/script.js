function scrollHorizontally(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  var scrollSpeed = 30;
  document.documentElement.scrollLeft -= delta * scrollSpeed;
  document.body.scrollLeft -= delta * scrollSpeed;
  //   e.preventDefault();
}

if (window.addEventListener) {
  // IE9, Chrome, Safari, Opera
  window.addEventListener("mousewheel", scrollHorizontally, false);
  // Firefox
  window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
  // IE 6/7/8
  window.attachEvent("onmousewheel", scrollHorizontally);
}

let namediv = document.querySelector(".sayHi");
namediv.addEventListener("mouseenter", function () {
  namediv.style.opacity = 1;
});

let inputname = document.querySelector("#name");
inputname.addEventListener("focus", function (e) {
  inputname.style.color = "black";
});

let videos = document.querySelectorAll(".videoWrap");
videos.forEach(function (vd) {
  vd.addEventListener("mouseenter", function () {
    this.classList.remove("hidden");
  });
});

let images = document.querySelectorAll(".imgWrap");
images.forEach(function (img) {
  img.addEventListener("mouseenter", function () {
    this.classList.remove("hidden");
  });
});

let i = 1;
let button = document.querySelector(".button");
button.addEventListener("mouseenter", function () {
  this.classList.remove("hidden");
});
let buttonclick = document.querySelector("#click");
buttonclick.addEventListener("click", function (e) {
  e.preventDefault();
  let numtxt = document.querySelector("#clicknum");
  numtxt.innerHTML = "clicked ✕ " + i;
  i++;
});

let clockContainer = document.querySelector(".clock");
let clock = document.querySelector("#clock");
clockContainer.addEventListener("mouseenter", function () {
  this.classList.remove("hidden");
});
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  clock.innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime();

let colorContainer = document.querySelector(".color");
colorContainer.addEventListener("mouseenter", function () {
  this.classList.remove("hidden");
});
let cross = document.querySelectorAll(".cross");
let green = document.querySelector("#green");
let red = document.querySelector("#red");
let pink = document.querySelector("#pink");
let blue = document.querySelector("#blue");
let black = document.querySelector("#black");
let links = document.querySelectorAll(".hoverEffect");
green.addEventListener("click", function () {
  cross.forEach(function (x) {
    x.removeAttribute("class");
    x.classList.add("green");
  });
  document.body.style.color = "lime";
  links.forEach(function (link) {
    console.log(link);
    link.style.color = "lime";
  });
});
red.addEventListener("click", function () {
  cross.forEach(function (x) {
    x.removeAttribute("class");
    x.classList.add("red");
  });
  document.body.style.color = "red";
  links.forEach(function (link) {
    console.log(link);
    link.style.color = "red";
  });
});
pink.addEventListener("click", function () {
  cross.forEach(function (x) {
    x.removeAttribute("class");
    x.classList.add("pink");
  });
  document.body.style.color = "magenta";
  links.forEach(function (link) {
    console.log(link);
    link.style.color = "magenta";
  });
});
blue.addEventListener("click", function () {
  cross.forEach(function (x) {
    x.removeAttribute("class");
    x.classList.add("blue");
  });
  document.body.style.color = "blue";
  links.forEach(function (link) {
    console.log(link);
    link.style.color = "blue";
  });
});
black.addEventListener("click", function () {
  cross.forEach(function (x) {
    x.removeAttribute("class");
    x.classList.add("cross");
  });
  document.body.style.color = "black";
  links.forEach(function (link) {
    console.log(link);
    link.style.color = "black";
  });
});
