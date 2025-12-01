


    // Initialize the ripple effect
    $('#hero-banner').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });


    const aboutBtn = document.getElementById("aboutBtn");
    const modal = document.getElementById("aboutModal");
    const closeModal = document.getElementById("closeModal");

    aboutBtn.addEventListener("click", function () {
        modal.style.display = "flex"; // Show modal
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
    });

    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Get the button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show the button when the user scrolls down 100px from the top
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.classList.remove("hidden");
        } else {
            scrollTopBtn.classList.add("hidden");
        }
    };

    // Scroll to the top when the user clicks the button
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });



    const rows = document.querySelectorAll('#rowContainer'); // Select rows by class, not id
    let currentRowIndex = 0; // Track which row is being loaded
    const loadingBar = document.getElementById('loadingBar'); // Loading spinner
    const viewMoreBtn = document.getElementById('viewMoreBtn'); // View More button

    viewMoreBtn.addEventListener('click', function () {
        // If rows are still hidden, show them one by one with loading
        if (currentRowIndex < rows.length) {
            loadingBar.classList.remove('hidden'); // Show loading spinner
            viewMoreBtn.classList.add('hidden'); // Hide the button temporarily

            // Simulate loading with a 2-second delay
            setTimeout(() => {
                rows[currentRowIndex].classList.remove('hidden'); // Show next row
                currentRowIndex++; // Move to the next row

                loadingBar.classList.add('hidden'); // Hide the loading spinner
                viewMoreBtn.classList.remove('hidden'); // Show the button again

                // If all rows are shown, switch the button text to "View Less"
                if (currentRowIndex >= rows.length) {
                    viewMoreBtn.textContent = 'View Less';
                }
            }, 2000); // 2 seconds delay for loading simulation
        } else {
            // All rows are shown, now toggle visibility back to "View Less"
            rows.forEach(row => row.classList.add('hidden')); // Hide all rows
            currentRowIndex = 0; // Reset to the first hidden row
            viewMoreBtn.textContent = 'View More'; // Switch the button text back to "View More"
        }
    });


    const texts = ["UI/UX & CMS DEVELOPER ", "Frontend Architect", "UI Engineer"];
let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const h2 = document.getElementById('typingEffect');
    
    if (isDeleting) {
        currentText = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = texts[textIndex].substring(0, charIndex + 1);
        charIndex++;
    }

    h2.textContent = currentText;

    // If the text is fully typed out
    if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => {
            isDeleting = true; // Start deleting
        }, 2000); // Pause before deleting
    }

    // If the text is fully deleted
    if (isDeleting && charIndex === 0) {
        isDeleting = false; // Start typing next text
        textIndex = (textIndex + 1) % texts.length; // Move to the next text in the array
    }

    setTimeout(type, isDeleting ? 100 : 150); // Typing speed
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000); // Start typing effect after a delay
});


