// Account Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
    const accountBtn = document.querySelector('.account-btn');
    const accountDropdown = document.querySelector('.account-dropdown');
    
    // Toggle dropdown on button click
    if (accountBtn) {
        accountBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            accountDropdown.classList.toggle('show');
            
            // Toggle arrow rotation
            const arrow = this.querySelector('.fa-chevron-down');
            if (arrow) {
                arrow.style.transform = accountDropdown.classList.contains('show') 
                    ? 'rotate(180deg)' 
                    : 'rotate(0)';
            }
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-account')) {
            accountDropdown.classList.remove('show');
            const arrow = accountBtn?.querySelector('.fa-chevron-down');
            if (arrow) arrow.style.transform = 'rotate(0)';
        }
    });
    
    // Close dropdown when clicking on a dropdown item
    const dropdownItems = document.querySelectorAll('.dropdown-item:not(.login-link)');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            accountDropdown.classList.remove('show');
            const arrow = accountBtn?.querySelector('.fa-chevron-down');
            if (arrow) arrow.style.transform = 'rotate(0)';
        });
    });
    
    // Special handling for login link (handled by login.js)
    const loginLink = document.querySelector('.dropdown-item.login-link');
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.stopPropagation();
            accountDropdown.classList.remove('show');
            const arrow = accountBtn?.querySelector('.fa-chevron-down');
            if (arrow) arrow.style.transform = 'rotate(0)';
        });
    }
});
