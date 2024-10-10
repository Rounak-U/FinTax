// Select the h2 and p elements
const sectionTitle = document.querySelector('.support h2');
const sectionParagraph = document.querySelector('.support p');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate h2 when it comes into view
            entry.target.classList.add('show');
            // Check if the target is h2 to trigger the paragraph animation with delay
            if (entry.target === sectionTitle) {
                setTimeout(() => {
                    sectionParagraph.classList.add('show'); // Add class to p with delay
                }, 10); // Delay of 300ms
            }
        }
    });
});

// Observe the h2 element
observer.observe(sectionTitle);

// Select the h5 element in details
// Select the h5 and p elements in details section
// Select the h5 and p elements in details section
// Select the h5 element in the details section
const detailsTitle = document.querySelector('.details h5');

// Select all p elements in the details section
const detailsParagraphs = document.querySelectorAll('.details p');

// Create an IntersectionObserver for the h5 and paragraphs in the details section
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate h5 when it comes into view
            if (entry.target === detailsTitle) {
                entry.target.classList.add('show'); // Add 'show' class to h5

                // Iterate over each p element and add the 'show' class with a delay
                detailsParagraphs.forEach((paragraph, index) => {
                    setTimeout(() => {
                        paragraph.classList.add('show'); // Add class to <p> with delay
                    }, 50 + index * 100); // Add delay based on index (adjustable)
                });
            }
        }
    });
}, { threshold: 0.5 }); // Ensure at least 50% of the element is visible before triggering

// Observe the h5 element in the details section
observer1.observe(detailsTitle);

function toggleMenu() {
    const navContents = document.querySelector('.nav-contents');
    navContents.classList.toggle('active');
}


