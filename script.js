const btn = document.querySelectorAll(".btn--small");
btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault;
    setTimeout(function () {
      btn.style.backgroundColor = "#166534";
      btn.style.color = "#fafafa";
      btn.style.border = "none";
      btn.textContent = "Added To Cart";
    }, 10000);
  });
});
