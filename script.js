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
    document.getElementById("summaryDiv").style.right = "0";
    document.getElementById("summaryDiv").style.opacity = "1";
    document.getElementById("btnMenu").style.transform = "rotate(0deg)";
    document.getElementById("btnMenu").setAttribute("onclick", "closeMenu()");
}

function closeMenu() {
    document.getElementById("summaryDiv").style.right = "-12rem";
    document.getElementById("summaryDiv").style.opacity = "0";
    document.getElementById("btnMenu").style.transform = "rotate(180deg)";
    document.getElementById("btnMenu").setAttribute("onclick", "openMenu()");
}

//TDF Countdown

var countDownDate = new Date("Jun 26, 2021 11:15:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-tdf").innerHTML = "D-" + days + " " + hours + ":"
  + minutes + ":" + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-tdf").innerHTML = "Started !";
  }
}, 1000);
