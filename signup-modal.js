document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const signupModal = document.getElementById('signupModal');
    const createAccountLink = document.querySelector('.dropdown-item[href="#"]');
    const closeModal = document.querySelector('.close-modal');
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    const signupForm = document.getElementById('signupForm');
    
    // Open modal when Create Account is clicked
    if (createAccountLink) {
        createAccountLink.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            
            // Close account dropdown if open
            const accountDropdown = document.querySelector('.account-dropdown');
            if (accountDropdown && accountDropdown.classList.contains('show')) {
                accountDropdown.classList.remove('show');
                const arrow = document.querySelector('.account-btn .fa-chevron-down');
                if (arrow) arrow.style.transform = 'rotate(0)';
            }
        });
    }
    
    // Close modal when X is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            signupModal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
    
    // Close modal when clicking outside the modal content
    signupModal.addEventListener('click', function(e) {
        if (e.target === signupModal) {
            signupModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    // Toggle password visibility
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
    
    // Handle form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                password: document.getElementById('password').value,
                confirmPassword: document.getElementById('confirmPassword').value
            };
            
            // Basic validation
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', formData);
            
            // Show success message (in a real app, you'd handle the server response)
            alert('Account created successfully! You can now log in.');
            
            // Close the modal and reset the form
            signupModal.classList.remove('show');
            document.body.style.overflow = '';
            this.reset();
        });
    }
});
