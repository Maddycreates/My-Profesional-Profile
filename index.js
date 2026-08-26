const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
	menuToggle.addEventListener('click', () => {
		const isOpen = siteNav.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
	});
}

const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = document.querySelectorAll('main section[id]');
const revealItems = document.querySelectorAll('.reveal');
const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');
const backToTop = document.querySelector('.back-to-top');



	navLinks.forEach((link) => link.addEventListener('click', () => {
		siteNav.classList.remove('open');
		menuToggle?.setAttribute('aria-expanded', 'false');
	}));

	const revealObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) entry.target.classList.add('visible');
		});
	}, { threshold: 0.12 });
	revealItems.forEach((item) => revealObserver.observe(item));

	const sectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
			}
		});
	}, { rootMargin: '-35% 0px -55% 0px' });
	sections.forEach((section) => sectionObserver.observe(section));

	contactForm?.addEventListener('submit', (event) => {
		event.preventDefault();
		formStatus.textContent = 'Thanks. Your message is ready for future backend integration.';
		contactForm.reset();
	});

	window.addEventListener('scroll', () => {
		backToTop?.classList.toggle('visible', window.scrollY > 500);
	}, { passive: true });

	backToTop?.addEventListener('click', () => {
		document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
	});

const year = document.querySelector('#year');
if (year) {
	year.textContent = new Date().getFullYear();
}
