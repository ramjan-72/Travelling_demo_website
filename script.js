document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const mobileMenuPanel = document.querySelector('.mobile-menu-panel');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const body = document.body;
    
    if (mobileMenuBtn && mobileMenuPanel && mobileMenuOverlay) {
        // Toggle mobile menu
        function toggleMobileMenu() {
            mobileMenuPanel.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
            
            // Toggle between hamburger and close icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenuPanel.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
        
        // Open/close mobile menu when clicking the button
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        // Close menu when clicking on overlay
        mobileMenuOverlay.addEventListener('click', function() {
            toggleMobileMenu();
        });
        
        // Close menu when clicking on a nav link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                toggleMobileMenu();
            });
        });
        
        // Close menu when clicking on mobile buttons
        const mobileButtons = document.querySelectorAll('.mobile-buttons .btn');
        mobileButtons.forEach(button => {
            button.addEventListener('click', function() {
                toggleMobileMenu();
            });
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenuPanel.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
        
        // Close menu when clicking the close button
        if (mobileCloseBtn) {
            mobileCloseBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleMobileMenu();
            });
        }
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link highlighting on scroll
    const sections = document.querySelectorAll('section');
    
    function highlightNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === current) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Call once on page load

    // Initialize destination data
    const destinations = [
        {
            id: 1,
            name: 'Bali, Indonesia',
            image: 'https://www.johansens.com/wp-content/uploads/2016/08/Thailand-AYANA-Estate-Bali-73-e1673272835586.jpg',
            duration: '7 Days Tour',
            price: 899,
            rating: 4.7,
            reviews: 156,
            features: ['Expert mountain guides', 'Camping under the stars', 'Scenic viewpoints', 'All necessary gear provided']
        },
        {
            id: 2,
            name: 'Santorini, Greece',
            image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/f6/2d/d1.jpg',
            duration: '5 Days Tour',
            price: 899,
            rating: 4.8,
            reviews: 245
        },
        {
            id: 3,
            name: 'Kyoto, Japan',
            image: 'https://i0.wp.com/www.touristjapan.com/wp-content/uploads/2025/01/map-of-kyoto-japan-travel.jpg?resize=1024%2C683&ssl=1',
            duration: '10 Days Tour',
            price: 2199,
            rating: 4.7,
            reviews: 198
        },
        {
            id: 4,
            name: 'Paris, France',
            image: 'https://w0.peakpx.com/wallpaper/227/485/HD-wallpaper-paris-panorama-evening-city-eiffel-tower-france.jpg',
            duration: '6 Days Tour',
            price: 1099,
            rating: 4.6,
            reviews: 312
        },
        {
            id: 5,
            name: 'New York, USA',
            image: 'https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.jpg?b=1&s=612x612&w=0&k=20&c=CJ24O7_JH0sKBCdQdmxu2qX3YEvOeMsValRHtAIuGDY=',
            duration: '8 Days Tour',
            price: 1499,
            rating: 4.9,
            reviews: 276
        },
        {
            id: 6,
            name: 'Sydney, Australia',
            image: 'https://ychef.files.bbci.co.uk/1280x720/p0gp95cq.jpg',
            duration: '9 Days Tour',
            price: 1699,
            rating: 4.8,
            reviews: 201
        }
    ];

    // Initialize packages data
    const packages = [
        {
            id: 1,
            title: 'Mountain Trekking Adventure',
            image: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2015/02/Intrepid-Travel-Nepal_Everest-Base-Camp_Group_Trek03.jpg',
            duration: '5 Days / 4 Nights',
            description: 'Challenge yourself with breathtaking mountain trails and scenic views',
            features: [
                'Expert mountain guides',
                'Camping under the stars',
                'Scenic viewpoints',
                'All necessary gear provided',
                'Meals included'
            ],
            price: 2499
        },
        {
            id: 2,
            title: 'Adventure Expedition',
            image: 'https://c0.wallpaperflare.com/preview/979/961/156/adventure-travel-hiking-mountain.jpg',
            duration: '10 Days / 9 Nights',
            description: 'For the thrill-seekers looking for their next adrenaline rush',
            features: [
                'Guided hiking tours',
                'White water rafting',
                'Mountain climbing',
                'Camping under the stars',
                'All equipment provided'
            ],
            price: 1899
        },
        {
            id: 3,
            title: 'Wildlife Safari Adventure',
            image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            duration: '7 Days / 6 Nights',
            description: 'Experience the thrill of wildlife in their natural habitat',
            features: [
                'Game drives in national parks',
                'Expert wildlife guides',
                'Luxury tented camps',
                'Bird watching tours',
                'Night safaris'
            ],
            price: 2999
        }
    ];

    // Initialize testimonials data
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Travel Enthusiast',
            avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
            text: 'The best travel experience I\'ve ever had! The team took care of every detail and made our honeymoon truly magical. Highly recommended!'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Adventure Seeker',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            text: 'As someone who travels frequently, I can confidently say that Wanderlust Adventures offers top-notch service. Their local guides are knowledgeable and friendly.'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Family Traveler',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
            text: 'Traveling with kids can be challenging, but Wanderlust made it so easy. They planned everything perfectly, and we had an amazing family vacation!'
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'Solo Explorer',
            avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
            text: 'As a solo traveler, safety is my top priority. Wanderlust provided excellent guidance and made sure I had a fantastic experience exploring new destinations.'
        },
        {
            id: 5,
            name: 'Priya Patel',
            role: 'Luxury Traveler',
            avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
            text: 'The luxury packages are worth every penny! The attention to detail and personalized service exceeded all my expectations. Will definitely travel with them again.'
        },
        {
            id: 6,
            name: 'James Wilson',
            role: 'Photography Enthusiast',
            avatar: 'https://randomuser.me/api/portraits/men/88.jpg',
            text: 'The photography tours are incredible! The guides knew all the best spots and timings for perfect shots. Came back with amazing memories and photos.'
        }
    ];

    // Render destinations
    function renderDestinations() {
        const container = document.querySelector('.destinations-grid');
        if (!container) return;

        let html = '';
        destinations.forEach(destination => {
            const stars = [];
            const fullStars = Math.floor(destination.rating);
            const hasHalfStar = destination.rating % 1 >= 0.5;
            
            for (let i = 1; i <= 5; i++) {
                if (i <= fullStars) {
                    stars.push('<i class="fas fa-star"></i>');
                } else if (i === fullStars + 1 && hasHalfStar) {
                    stars.push('<i class="fas fa-star-half-alt"></i>');
                } else {
                    stars.push('<i class="far fa-star"></i>');
                }
            }

            html += `
                <div class="destination-card">
                    <div class="destination-img" style="background-image: url('${destination.image}');">
                        <div class="price">From $${destination.price}</div>
                    </div>
                    <div class="destination-info">
                        <h3>${destination.name}</h3>
                        <p>${destination.duration}</p>
                        <div class="rating">
                            ${stars.join('')}
                            <span>(${destination.reviews} reviews)</span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    // Render packages
    function renderPackages() {
        const container = document.querySelector('.packages-grid');
        if (!container) return;

        let html = '';
        packages.forEach(pkg => {
            const features = pkg.features.map(feature => `
                <div class="feature">
                    <i class="fas fa-check-circle"></i>
                    <span>${feature}</span>
                </div>
            `).join('');

            html += `
                <div class="package-card">
                    <div class="package-img" style="background-image: url('${pkg.image}');"></div>
                    <div class="package-details">
                        <span class="package-duration">${pkg.duration}</span>
                        <h3>${pkg.title}</h3>
                        <p>${pkg.description}</p>
                        <div class="package-features">
                            ${features}
                        </div>
                        <div class="package-price">
                            <div class="price-amount">$${pkg.price}<span>/person</span></div>
                            <button class="btn">Book Now</button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    // Render testimonials
    function renderTestimonials() {
        const container = document.querySelector('.testimonials-slider');
        if (!container) return;

        let html = '';
        testimonials.forEach(testimonial => {
            html += `
                <div class="testimonial-card">
                    <div class="testimonial-avatar">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}">
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <h4 class="testimonial-author">${testimonial.name}</h4>
                    <p class="testimonial-role">${testimonial.role}</p>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    // Initialize Slick Slider for testimonials
    function initTestimonialSlider() {
        $('.testimonials-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
            appendArrows: $('.testimonials-container'),
            appendDots: $('.testimonials-dots'),
            slidesToShow: 3,
            slidesToScroll: 3,  // Show 3 cards at a time on desktop
            autoplay: false,
            arrows: true,
            dotsClass: 'slick-dots custom-dots',
            initialSlide: 0,
            variableWidth: false,
            centerMode: false,
            customPaging: function(slider, i) {
                // This will be overridden by responsive settings
                return '<button></button>';
            },
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        customPaging: function(slider, i) {
                            // Show only 2 dots for desktop (2 sets of 3 cards)
                            if (i < 2) {
                                return '<button></button>';
                            }
                            return null;
                        }
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        customPaging: function(slider, i) {
                            // Show 3 dots for tablet (3 sets of 2 cards)
                            if (i < 3) {
                                return '<button></button>';
                            }
                            return null;
                        }
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        infinite: true,
                        customPaging: function(slider, i) {
                            // Show all 6 dots for mobile (6 single cards)
                            return '<button></button>';
                        }
                    }
                }
            ]
        });
    }

    // Form validation
    function initForms() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = this.querySelector('input[type="text"]').value.trim();
                const email = this.querySelector('input[type="email"]').value.trim();
                const message = this.querySelector('textarea').value.trim();
                
                if (!name || !email || !message) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    alert('Please enter a valid email address');
                    return;
                }
                
                // Here you would typically send the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
        }
        
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value.trim();
                
                if (!email) {
                    alert('Please enter your email address');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    alert('Please enter a valid email address');
                    return;
                }
                
                // Here you would typically send the email to your mailing list
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            });
        }
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Initialize AOS (Animate On Scroll)
    function initAOS() {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // Initialize all components
    function init() {
        renderDestinations();
        renderPackages();
        renderTestimonials();
        
        // Load jQuery and Slick only if they're not already loaded
        if (typeof jQuery == 'undefined') {
            const jqueryScript = document.createElement('script');
            jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
            jqueryScript.onload = function() {
                loadSlick();
            };
            document.head.appendChild(jqueryScript);
        } else {
            loadSlick();
        }
        
        initForms();
        
        // Load AOS if not already loaded
        if (typeof AOS === 'undefined') {
            const aosCss = document.createElement('link');
            aosCss.rel = 'stylesheet';
            aosCss.href = 'https://unpkg.com/aos@next/dist/aos.css';
            document.head.appendChild(aosCss);
            
            const aosScript = document.createElement('script');
            aosScript.src = 'https://unpkg.com/aos@next/dist/aos.js';
            aosScript.onload = initAOS;
            document.body.appendChild(aosScript);
        } else {
            initAOS();
        }
    }
    
    function loadSlick() {
        if (typeof $.fn.slick === 'undefined') {
            const slickCss = document.createElement('link');
            slickCss.rel = 'stylesheet';
            slickCss.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
            document.head.appendChild(slickCss);
            
            const slickScript = document.createElement('script');
            slickScript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
            slickScript.onload = initTestimonialSlider;
            document.body.appendChild(slickScript);
        } else {
            initTestimonialSlider();
        }
    }

    // Initialize everything when the DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
});
