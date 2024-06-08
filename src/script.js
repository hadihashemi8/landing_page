const $ = document;
const menuIcon = $.getElementById("menu-icon");
const smMenuBar = $.getElementById("sm-menuBar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-times");
  smMenuBar.classList.toggle("h-[195px]");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    navBar.classList.add(
      "nav-bar",
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "z-50"
    );
  }
  if (window.scrollY == 0) {
    navBar.classList.remove(
      "nav-bar",
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "z-50"
    );
  }
});

// AOS lb part
AOS.init();

// typewriterjs lb part

let app = document.getElementById("app");

let typewriter = new Typewriter(app, {
  delay: 50,
});

typewriter
  .typeString("محصول خود را معرفی کنید سریع & زیبا")

  .start();
