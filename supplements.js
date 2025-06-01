document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".supplement");
  const tipBox = document.getElementById("tipBox");

  rows.forEach(row => {
    row.addEventListener("mouseover", () => {
      tipBox.textContent = row.getAttribute("data-tip");
    });
    row.addEventListener("mouseout", () => {
      tipBox.textContent = "";
    });
  });
});