const btn = document.querySelectorAll(".btn--small");
const img_display_none = document.querySelectorAll(".click_image");
btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault;
    setTimeout(function () {
      btn.style.backgroundColor = "#166534";
      btn.style.color = "#fafafa";
      btn.style.border = "none";
      btn.textContent = "Added To Cart";
      img_display_none.forEach(function (img_display_none) {
        img_display_none.style.display = "none";
        alert("Added To Cart!");
      });
    }, 10000);
  });
});
