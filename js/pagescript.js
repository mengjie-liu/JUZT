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

let addToCart = document.querySelector(".addToCart");
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
