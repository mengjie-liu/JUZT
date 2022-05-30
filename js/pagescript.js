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

// document.addEventListener("DOMContentLoaded", function (event) {
//   let gridWrap = document.querySelector(".gridWrap");
//   // gridWrap.transition = "1s";
//   document.addEventListener("mousemove", function () {
//     gridWrap.style.opacity = 1;
//   });
//   gridWrap.style.opacity = 0;
// });

let productOverviewImg = document.querySelector(".productOverviewImg");
// console.log(productOverviewImg);
if (productOverviewImg) {
  productOverviewImg.addEventListener("cllick", function () {
    console.log(productOverviewImg);
    location.href = "./product.html";
  });
}

let removes = document.querySelectorAll(".remove");
removes.forEach(function (remove) {
  remove.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.parentElement.parentElement.style.display = "none";
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
      // let item = this.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
      let item =
        this.parentElement.parentElement.parentElement.parentElement
          .parentElement;
      if (item != document.querySelector("body")) {
        item.remove();
      }
      console.log(item);
    }
    this.parentElement.previousElementSibling.innerHTML = num;
  });
});

let ifHow = true;
let productDesContainer = document.querySelector(".productDesContainer");
let howToUse = document.querySelector(".howToUse");
let howContent = document.querySelector(".howTo");
// let productDesContainer = document.querySelector(".productDesContainer");
if (howToUse) {
  howToUse.addEventListener("click", function (e) {
    e.preventDefault();
    if (ifHow == true) {
      howToUse.style.marginBottom = "0";
      howToUse.innerHTML = `
    close
    `;
      howContent.style.display = "block";
      productDesContainer.style.maxHeight =
        "calc(24.5vw - " + howContent.offsetHeight + "px )";
      console.log(howContent.offsetHeight);
      ifHow = false;
    } else {
      howToUse.style.marginBottom = "1em";
      // console.log("!!");
      productDesContainer.style.maxHeight = "24.5vw";
      howToUse.innerHTML = `
    how to use
    `;
      howContent.style.display = "none";
      ifHow = true;
    }
  });
}

$(document).ready(function () {
  console.log(window.location.href);

  window.scrollTo(0, 0);

  let idleTimer = null;
  let idleState = false;

  function showGrid(time) {
    clearTimeout(idleTimer);
    if (idleState == true) {
      $(".gridWrap").removeClass("hidden");
    }
    idleState = false;
    idleTimer = setTimeout(function () {
      $(".gridWrap").addClass("hidden");
      idleState = true;
    }, time);
  }

  //   let addToCart = document.querySelector(".addd");
  // let smallCart = document.querySelector(".cart");
  // if (addToCart) {
  //   addToCart.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     smallCart.style.display = "block";
  //     let close = document.querySelector(".close");
  //     close.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       smallCart.style.display = "none";
  //     });
  //   });
  // }

  $(".addd").click(function (e) {
    e.preventDefault();
    $(".cart").fadeIn(800);
    $(".close").click(function (e) {
      e.preventDefault();
      $(".cart").fadeOut(800);
    });
  });

  showGrid(800);

  $(window).mousemove(function () {
    showGrid(800);
  });
  $(window).scroll(function () {
    showGrid(800);
  });
  $(".about").scroll(function () {
    showGrid(800);
  });
  $(".productDesContainer").scroll(function () {
    showGrid(800);
  });

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
