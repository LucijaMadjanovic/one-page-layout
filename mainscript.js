// prikaži navigaciju

const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if(toggle && nav)
	{
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}

showMenu('nav-toggle','nav-menu')




// fotogalerija
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// sat za odbrojavanje:
// postaviti datum
var countDownDate = new Date("May 12, 2023 18:00:00").getTime();

// azuriraj timer svaku sekundu
var x = setInterval(function() {

// azuriraj danasnje vrijeme i datum
var now = new Date().getTime();

// razlika između sada i krajnjeg termina
var distance = countDownDate - now;

// racunanje vremena
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// prikaz odbrojavanja u elementu sa id="demo"
document.getElementById("timer-js").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// odbrojavanje zavrseno
if (distance < 0) {
	clearInterval(x);
	document.getElementById("timer-js").innerHTML = "TEHNOLOGIJADA JE POČELA";
}
}, 1000);

