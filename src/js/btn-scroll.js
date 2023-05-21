const goTopBtn = document.querySelector(".go-top");


window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener("click", goTop);

function trackScroll() {

  const scrolled = window.pageYOffset;

  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {

    goTopBtn.classList.add("go-top--show");
  } else {

    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {

  if (window.pageYOffset > 100) {
  
    window.scrollBy(0, -300); 
    setTimeout(goTop, 100); 
  }
}