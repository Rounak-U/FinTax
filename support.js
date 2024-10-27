// Select the h2 and p elements
const sectionTitle = document.querySelector('.support h2');
const sectionParagraph = document.querySelector('.support p');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target === sectionTitle) {
                setTimeout(() => {
                    sectionParagraph.classList.add('show'); 
                }, 10); 
            }
        }
    });
});

observer.observe(sectionTitle);

const detailsTitle = document.querySelector('.details h5');

const detailsParagraphs = document.querySelectorAll('.details p');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === detailsTitle) {
                entry.target.classList.add('show');

                detailsParagraphs.forEach((paragraph, index) => {
                    setTimeout(() => {
                        paragraph.classList.add('show'); 
                    }, 50 + index * 100); 
                });
            }
        }
    });
}, { threshold: 0.5 }); 

observer1.observe(detailsTitle);

function toggleMenu() {
    const navContents = document.querySelector('.nav-contents');
    navContents.classList.toggle('active');
}


