let linkBtn = document.querySelectorAll(".linkBtn");
let BtnLinks = document.querySelectorAll(".BtnLinks");


BtnLinks[0].style.display = "block";
linkBtn[0].classList.add("active");


linkBtn.forEach((item,i) => {
  item.addEventListener("click", () => {
    linkBtn.forEach((index,btn) => {
      index.classList.remove("active");
      BtnLinks[btn].style.display = "none";
    })
    item.classList.add("active");
    BtnLinks.style.display = "block";
  })
})

