document.addEventListener("DOMContentLoaded", function() {
    // Initialize Sweet Scroll
    new SweetScroll({});

    // Initialize Particles.js
    particlesJS("particles-js", {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: "#6C63FF" },
            shape: {
                type: "polygon",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 }
            },
            opacity: {
                value: 0.4,
                random: true,
                anim: { enable: true, speed: 0.8, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 19, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#6C63FF",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 200, line_linked: { opacity: 0.4 } },
                push: { particles_nb: 3 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

    // Scroll Fade-In Animation with Intersection Observer
    var fadeElements = document.querySelectorAll('.fade-in');
    
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(function(el) {
            observer.observe(el);
        });
    } else {
        // Fallback for old browsers
        fadeElements.forEach(function(el) {
            el.classList.add('visible');
        });
    }
}, false);