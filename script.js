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
var summaryDiv = document.getElementById("summaryDiv");

btnMenu[0].addEventListener("click", function () { 
            this.classList.toggle("active"); 
            if (summaryDiv.style.display === "block") { 
                summaryDiv.style.display = "none";             
                btnMenu.style.transform = "rotate(0deg)";
            } else { 
                summaryDiv.style.display = "block";
                btnMenu.style.transform = "rotate(180deg)";
            } 
        }); 
