// Account Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const openLoginModalBtns = document.querySelectorAll('#openLoginModal, #openLoginModalMobile');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const signupLinks = document.querySelectorAll('.signup-link');
    const loginLinks = document.querySelectorAll('.login-link');
    const mobileMenuPanel = document.querySelector('.mobile-menu-panel');

    // Function to show modal with animation
    function showModal(modal) {
        if (!modal) return;
        
        // Add modal-open class to body
        document.body.classList.add('modal-open');
        
        // Show modal
        modal.style.display = 'flex';
        
        // Trigger reflow to enable animation
        void modal.offsetWidth;
        
        // Add show class for animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    // Function to hide modal with animation
    function hideModal(modal) {
        if (!modal) return;
        
        // Remove show class for animation
        modal.classList.remove('show');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }, 300);
    }

    // Open login modal when account button is clicked
    openLoginModalBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showModal(loginModal);
            
            // Close mobile menu if open
            if (mobileMenuPanel && mobileMenuPanel.classList.contains('active')) {
                document.querySelector('.mobile-menu').click();
            }
        });
    });

    // Close modal when close button is clicked
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            hideModal(modal);
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (e.target === loginModal || e.target === signupModal) {
            hideModal(e.target);
        }
    });

    // Toggle between login and signup modals
    signupLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            hideModal(loginModal);
            showModal(signupModal);
        });
    });

    loginLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            hideModal(signupModal);
            showModal(loginModal);
        });
    });

    // Toggle password visibility
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
});
