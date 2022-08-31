const toggleMenuBtn = document.querySelector('#hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

function handleMobileNavToggle(e) {
	mobileNav.classList.toggle('show-mobile-nav');
}

toggleMenuBtn.addEventListener('click', handleMobileNavToggle);
