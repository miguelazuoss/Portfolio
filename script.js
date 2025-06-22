document.getElementById("menuButton").addEventListener("click", function() {
    let menu = document.getElementById("menuList");
    let menuButt  = document.getElementById("menuButton");

    if(menuButt.style.display != "none"){
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }

    
});


window.addEventListener("resize", function() {
    let menu = document.getElementById("menuList");
    if (window.innerWidth > 795) {
        menu.style.display = "none";
    }
});

// Adicione isso ao seu script.js
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.projects-carousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const projects = document.querySelectorAll('.project-card');
    
    let currentIndex = 0;
    const cardWidth = projects[0].offsetWidth + 30; // width + gap
    
    function updateCarousel() {
        carousel.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth'
        });
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const threshold = 50;
        
        if (touchEndX < touchStartX - threshold && currentIndex < projects.length - 1) {
            // Swipe left - next
            currentIndex++;
            updateCarousel();
        } else if (touchEndX > touchStartX + threshold && currentIndex > 0) {
            // Swipe right - prev
            currentIndex--;
            updateCarousel();
        }
    }
    
});
