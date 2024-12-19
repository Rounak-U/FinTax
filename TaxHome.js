const sectionTitle = document.querySelector('.services-section h2');
const cards = document.querySelectorAll('.services-section .card');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            if (entry.target === sectionTitle) {
                entry.target.classList.add('show');
            } else {
                entry.target.style.setProperty('--delay', `${index * 0.16}s`);
                entry.target.classList.add('show');
            }
        }
    });
});

observer.observe(sectionTitle);
cards.forEach(card => {
    observer.observe(card);
});


const sectionTitle1 = document.querySelector('.why-choose-section h2');
const cards1 = document.querySelectorAll('.why-choose-section .card');
const observer1 = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            if (entry.target === sectionTitle) {
                entry.target.classList.add('show');
            } else {
                entry.target.style.setProperty('--delay', `${index * 0.16}s`);
                entry.target.classList.add('show');
            }
        }
    });
});

observer1.observe(sectionTitle1);
cards1.forEach(card1 => {
    observer.observe(card1);
});

function toggleMenu() {
    const navContents = document.querySelector('.nav-contents');
    navContents.classList.toggle('active');
}
