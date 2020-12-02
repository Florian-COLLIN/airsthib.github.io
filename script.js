document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

btnTop = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "table-cell";
  } else {
    btnTop.style.display = "none";
  }
}

var btnMenu = document.getElementsById("btnMenu");
var content = documentn.getElementByClassName("summaryDiv");
var i;

for (i = 0; i < btnMenu.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
