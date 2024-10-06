const sectionTitle = document.querySelector('.values-section .section-heading');
const cards = document.querySelectorAll('.values-section .card');

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            if (entry.target === sectionTitle) {
                entry.target.classList.add('show');
            } else {
                entry.target.style.setProperty('--delay', `${index * 0.175}s`);
                entry.target.classList.add('show');
            }
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

observer.observe(sectionTitle);
cards.forEach(card => {
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        threshold: 0.1
    };


    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);


    const teamSectionElements = document.querySelectorAll('.team-section h2, .team-section p, .team-section .card');

    teamSectionElements.forEach(element => {
        observer.observe(element);
    });
});

function toggleMenu() {
    const navContents = document.querySelector('.nav-contents');
    navContents.classList.toggle('active');
}
