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

let productOverviewImg = document.querySelector(".productOverviewImg");
// console.log(productOverviewImg);
if (productOverviewImg) {
  productOverviewImg.addEventListener("cllick", function () {
    console.log(productOverviewImg);
    location.href = "./product.html";
  });
}

let addToCart = document.querySelector(".addd");
let smallCart = document.querySelector(".cart");
if (addToCart) {
  addToCart.addEventListener("click", function (e) {
    e.preventDefault();
    smallCart.style.display = "block";
    let close = document.querySelector(".close");
    close.addEventListener("click", function (e) {
      e.preventDefault();
      smallCart.style.display = "none";
    });
  });
}

let removes = document.querySelectorAll(".remove");
removes.forEach(function (remove) {
  remove.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.parentElement.parentElement.remove();
  });
});

let adds = document.querySelectorAll(".add");
let mins = document.querySelectorAll(".min");
adds.forEach(function (add) {
  add.addEventListener("click", function (e) {
    e.preventDefault();
    let num = this.parentElement.previousElementSibling.innerHTML;
    num++;
    this.parentElement.previousElementSibling.innerHTML = num;
  });
});
mins.forEach(function (min) {
  min.addEventListener("click", function (e) {
    e.preventDefault();
    let num = this.parentElement.previousElementSibling.innerHTML;
    if (num > 1) {
      num--;
    } else if (num == 1) {
      this.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
    this.parentElement.previousElementSibling.innerHTML = num;
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
