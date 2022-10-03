const btn = document.querySelector(".btn--small");

btn.addEventListener("click", function () {
  setTimeout(function () {
    btn.style.backgroundColor = "#166534";
    btn.style.color = "#fafafa";
    btn.style.border = "none";
    btn.innerHTML = "Added To Cart";
  }, 10000);
});
