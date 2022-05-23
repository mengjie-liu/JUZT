class JUZTHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="gridWrap">
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
        <div class="cross"></div>
    </div>
    <div class="gridItem logo">
      <a href="index.html">
        <img id="en" src="asset/en.png" alt="" />
        <img id="zh" src="asset/zh.png" alt="" />
      </a>
    </div>
    <div class="gridItem nav">
      <div class="title" id="shop">
        <a href="shop.html" class="hoverEffect">shop</a>
      </div>
      <div class="title" id="about">
        <a href="about.html" class="hoverEffect">about</a>
      </div>
      <div class="title" id="login">
        <a href="login.html" class="hoverEffect">account</a>
      </div>
      <div class="title" id="cart">
        <a href="cart.html" class="hoverEffect">cart(0)</a>
      </div>
    </div>
      `;
  }
}
customElements.define("juzt-header", JUZTHeader);
