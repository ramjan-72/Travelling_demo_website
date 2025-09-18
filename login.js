// Initialize login functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing login functionality...');
    
    // Elements
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginLinks = document.querySelectorAll('.login-link');
    const signupLinks = document.querySelectorAll('.signup-link');
    const closeButtons = document.querySelectorAll('.close-modal');
    const loginForm = document.getElementById('loginForm');
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');

    // Debug info
    console.log('Login links found:', loginLinks.length);
    console.log('Login modal found:', !!loginModal);
    console.log('Signup modal found:', !!signupModal);
    
    // Make sure modals are hidden by default
    if (loginModal) loginModal.style.display = 'none';
    if (signupModal) signupModal.style.display = 'none';

    // Toggle password visibility
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input && icon) {
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            }
        });
    });

    // Open login modal with improved stability
    loginLinks.forEach(link => {
        // Remove any existing event listeners to prevent duplicates
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        
        newLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            console.log('Login link clicked');
            
            // Close any open dropdowns
            document.querySelectorAll('.account-dropdown.show').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
            
            // Close other modals
            document.querySelectorAll('.modal.show').forEach(modal => {
                modal.classList.remove('show');
                modal.style.display = 'none';
            });
            
            // Show login modal
            if (loginModal) {
                // First ensure the modal is hidden before showing
                loginModal.style.display = 'none';
                loginModal.offsetHeight; // Trigger reflow
                
                // Then show it with proper styling
                loginModal.style.display = 'flex';
                loginModal.style.opacity = '0';
                loginModal.classList.add('show');
                
                // Prevent background scrolling
                document.body.classList.add('modal-open');
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
                
                // Force reflow and then set opacity for smooth transition
                setTimeout(() => {
                    loginModal.style.opacity = '1';
                    loginModal.focus();
                }, 10);
                
                console.log('Login modal shown');
            }
            
            return false;
        }, true);
    });

    // Open signup modal
    signupLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeAllModals();
            if (signupModal) {
                signupModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modals when clicking the close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Close modal when clicking outside - more reliable implementation
    document.addEventListener('click', function(e) {
        const modals = document.querySelectorAll('.modal.show');
        if (modals.length === 0) return;
        
        const clickedElement = e.target;
        const isModal = clickedElement.classList.contains('modal');
        const isModalContent = clickedElement.closest('.modal-content') !== null;
        
        if (isModal && !isModalContent) {
            modals.forEach(modal => {
                closeModal(modal);
            });
        }
    }, true);
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('loginEmail');
            const password = document.getElementById('loginPassword');
            const rememberMe = document.getElementById('rememberMe');
            
            if (email && password && rememberMe) {
                console.log('Login attempt with:', { 
                    email: email.value, 
                    password: password.value, 
                    rememberMe: rememberMe.checked 
                });
                
                // Here you would typically send this data to your server
                // For now, just show success message
                alert('Login successful!');
                closeModal(loginModal);
                
                // Reset form
                this.reset();
            } else {
                console.error('Login form elements not found!');
            }
        });
    }

    // Helper functions
    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
            
            // Add a small delay before hiding to allow for animations
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            
            // Re-enable body scrolling
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '100%';
        }
    }

    function closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            closeModal(modal);
        });
    }
});
