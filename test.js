function toggleMenu () {  
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  if (burger){
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });  
  }
  
}
toggleMenu();
// paralaxe 

var image = document.getElementsByClassName('animation');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});