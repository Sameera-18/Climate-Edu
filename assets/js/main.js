/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== Foot print ===============*/
function calculateFootprint() {
    // Emission factors (kg CO2 per unit)
    const emissionFactors = {
        electricity: 0.233, // kg CO2 per kWh
        naturalGas: 5.3, // kg CO2 per therm
        car: 0.404, // kg CO2 per mile
        flight: 90 // kg CO2 per hour
    };

    // Get user inputs
    const electricityUsage = document.getElementById('electricity').value;
    const naturalGasUsage = document.getElementById('natural-gas').value;
    const milesDriven = document.getElementById('miles-driven').value;
    const flightHours = document.getElementById('flights').value;

    // Calculate carbon footprint
    const electricityFootprint = electricityUsage * emissionFactors.electricity;
    const naturalGasFootprint = naturalGasUsage * emissionFactors.naturalGas;
    const carFootprint = milesDriven * emissionFactors.car;
    const flightFootprint = flightHours * emissionFactors.flight;

    // Total footprint
    const totalFootprint = electricityFootprint + naturalGasFootprint + carFootprint + flightFootprint;

    // Display result
    document.getElementById('result').innerText = `Your total carbon footprint is ${totalFootprint.toFixed(2)} kg CO2 per year.`;
}
