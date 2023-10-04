document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/navbar.html")
    .then((res) => res.text())
    .then((nav) => {
      const navbar = new DOMParser()
        .parseFromString(nav, "text/html")
        .querySelector("nav");
      this.body.prepend(navbar);
    });
});
