// function scrollHorizontally(e) {
//   e = window.event || e;
//   var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
//   var scrollSpeed = 30;
//   document.documentElement.scrollLeft -= delta * scrollSpeed;
//   document.body.scrollLeft -= delta * scrollSpeed;
//   //   e.preventDefault();
// }
// if (window.addEventListener) {
//   // IE9, Chrome, Safari, Opera
//   window.addEventListener("mousewheel", scrollHorizontally, false);
//   // Firefox
//   window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
// } else {
//   // IE 6/7/8
//   window.attachEvent("onmousewheel", scrollHorizontally);
// }

document.addEventListener("click", function (e) {
  let grass = document.createElement("div");
  grass.innerHTML = `
  &#127793;
  `;
  grass.style.position = "absolute";
  grass.style.top = e.clientY + window.scrollY + "px";
  grass.style.left = e.clientX + "px";
  grass.classList.add("title");
  grass.classList.add("grass");
  document.querySelector("body").append(grass);
  // console.log("mouse location:", e.clientX, e.clientY);
});

let namediv = document.querySelector(".sayHi");
namediv.addEventListener("mouseenter", function () {
  this.style.transition = "0s";
  this.style.transitionDelay = "0s";
  this.style.opacity = 1;
});
// namediv.addEventListener("mouseleave", function () {
//   this.style.transition = "1s";
//   this.style.transitionDelay = "2s";
//   this.style.opacity = 0;
// });

// let inputname = document.querySelector("#name");
// inputname.addEventListener("focus", function (e) {
//   inputname.style.color = "black";
// });

let videos = document.querySelectorAll(".videoWrap");
videos.forEach(function (vd) {
  vd.addEventListener("mouseenter", function () {
    this.style.transition = "0s";
    this.style.transitionDelay = "0s";
    this.style.opacity = 1;
  });
  vd.addEventListener("mouseleave", function () {
    this.style.transition = "1s";
    this.style.transitionDelay = "0.25s";
    this.style.opacity = 0;
  });
});

let images = document.querySelectorAll(".imgWrap");
images.forEach(function (img) {
  img.addEventListener("mouseenter", function () {
    this.style.transition = "0s";
    this.style.transitionDelay = "0s";
    this.style.opacity = 1;
  });
  img.addEventListener("mouseleave", function () {
    this.style.transition = "1s";
    this.style.transitionDelay = "0.25s";
    this.style.opacity = 0;
  });
});

// let i = 1;
// let button = document.querySelector(".button");
// button.addEventListener("mouseenter", function () {
//   this.style.transition = "0s";
//   this.style.transitionDelay = "0s";
//   this.style.opacity = 1;
// });
// // button.addEventListener("mouseleave", function () {
// //   this.style.transition = "1s";
// //   this.style.transitionDelay = "2s";
// //   this.style.opacity = 0;
// // });
// let buttonclick = document.querySelector("#click");
// buttonclick.addEventListener("click", function (e) {
//   e.preventDefault();
//   let numtxt = document.querySelector("#clicknum");
//   numtxt.innerHTML = "clicked ✕ " + i;
//   i++;
// });

let clockContainer = document.querySelector(".clock");
let clock = document.querySelector("#clock");
clockContainer.addEventListener("mouseenter", function () {
  this.style.transition = "0s";
  this.style.transitionDelay = "0s";
  this.style.opacity = 1;
});
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  clock.innerHTML = h + ":&nbsp;" + m + ":&nbsp;" + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime();

document.addEventListener("DOMContentLoaded", function (event) {
  let colorContainer = document.querySelector(".color");
  colorContainer.addEventListener("mouseenter", function () {
    this.style.transition = "0s";
    this.style.transitionDelay = "0s";
    this.style.opacity = 1;
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
});

$(document).ready(function () {
  var $tickerWrapper = $(".tickerwrapper");
  var $list = $tickerWrapper.find("ul.list");
  var $clonedList = $list.clone();
  var listWidth = 10;

  $list.find("li").each(function (i) {
    listWidth += $(this, i).outerWidth(true);
  });

  var endPos = $tickerWrapper.width() - listWidth;

  $list.add($clonedList).css({
    width: listWidth + "px",
  });

  $clonedList.addClass("cloned").appendTo($tickerWrapper);

  //TimelineMax
  var infinite = new TimelineMax({ repeat: -1, paused: true });
  var time = 80;

  infinite
    .fromTo(
      $list,
      time,
      { rotation: 0.01, x: 0 },
      { force3D: true, x: -listWidth, ease: Linear.easeNone },
      0
    )
    .fromTo(
      $clonedList,
      time,
      { rotation: 0.01, x: listWidth },
      { force3D: true, x: 0, ease: Linear.easeNone },
      0
    )
    .set($list, { force3D: true, rotation: 0.01, x: listWidth })
    .to(
      $clonedList,
      time,
      { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone },
      time
    )
    .to(
      $list,
      time,
      { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone },
      time
    )
    .progress(1)
    .progress(0)
    .play();
});
//Pause/Play
// $tickerWrapper
//   .on("mouseenter", function () {
//     infinite.pause();
//   })
//   .on("mouseleave", function () {
//     infinite.play();
//   });
