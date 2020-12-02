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

function openMenu() {
    var btnMenu = document.getElementsById("btnMenu");
    var summaryDiv = document.getElementById("summaryDiv");
    if (summaryDiv.style.width === "0") {
        summaryDiv.style.width = "12rem";
        btnMenu.style.transform == "rotate(0deg)";
    } else {
        summaryDiv.style.width = "0";
        btnMenu.style.transform == "rotate(180deg)";
    }
}
