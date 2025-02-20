document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".image-container");
    const btnLeft = document.querySelector(".btn-left");
    const btnRight = document.querySelector(".btn-right");
    const imageWidth = container.querySelector("img").clientWidth + 10; // Ширина изображения + отступ
  
    btnLeft.addEventListener("click", () => {
      container.scrollBy({ left: -imageWidth, behavior: "smooth" });
    });
  
    btnRight.addEventListener("click", () => {
      container.scrollBy({ left: imageWidth, behavior: "smooth" });
    });
  });