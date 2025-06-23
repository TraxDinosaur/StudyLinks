// StudyLink JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize copy functionality
    initializeCopyButtons();
    
    // Initialize form validation
    initializeFormValidation();
    
    // Initialize toast
    initializeToast();
    
    // Initialize alert copy functionality
    initializeAlertCopy();
});

function initializeCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            copyToClipboard('#' + code, this);
        });
    });
}

function copyToClipboard(text, button) {
    // Create a temporary textarea element
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    
    // Select and copy the text
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        showCopyFeedback(button);
        showToast('Code copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy code', 'error');
    }
    
    // Remove the temporary element
    document.body.removeChild(tempTextArea);
}

function showCopyFeedback(button) {
    const originalContent = button.innerHTML;
    const originalClass = button.className;
    
    // Change button appearance
    if (button.classList.contains('copy-alert-btn')) {
        button.innerHTML = '✓';
        button.classList.add('copied');
    } else {
        button.innerHTML = '<i data-feather="check"></i>';
        button.classList.add('copied');
        feather.replace();
    }
    
    // Show toast
    showToast('Copied to clipboard!');
    
    // Reset after 2 seconds
    setTimeout(() => {
        button.innerHTML = originalContent;
        button.className = originalClass;
        if (!button.classList.contains('copy-alert-btn')) {
            feather.replace();
        }
    }, 2000);
}

function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                showToast('Please fill in all required fields', 'error');
            }
        });
    });
    
    // Real-time validation feedback
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid') && this.value.trim()) {
                this.classList.remove('is-invalid');
            }
        });
    });
}

function initializeToast() {
    // Auto-hide alerts after 15 seconds (extended for better visibility)
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            if (bsAlert) {
                bsAlert.close();
            }
        }, 15000);
    });
}

function initializeAlertCopy() {
    // Add click to copy functionality for alerts
    const copyableAlerts = document.querySelectorAll('.copyable-alert');
    
    copyableAlerts.forEach(alert => {
        const copyBtn = alert.querySelector('.copy-alert-btn');
        const alertContent = alert.querySelector('.alert-content');
        
        function copyAlertContent() {
            const message = alert.getAttribute('data-message');
            let textToCopy = '';
            
            // Extract code or URL from the message
            if (message.includes('Your code is: #')) {
                const codeMatch = message.match(/#([a-zA-Z0-9]+)/);
                textToCopy = codeMatch ? codeMatch[1] : message;
            } else if (message.includes('Found URL: ')) {
                const urlMatch = message.match(/Found URL: (.+)/);
                textToCopy = urlMatch ? urlMatch[1] : message;
            } else {
                textToCopy = message;
            }
            
            copyToClipboard(textToCopy, copyBtn);
        }
        
        // Copy on button click
        copyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            copyAlertContent();
        });
        
        // Copy on alert click
        alertContent.addEventListener('click', copyAlertContent);
    });
}

function showToast(message, type = 'success') {
    const toastElement = document.getElementById('copyToast');
    const toastBody = toastElement.querySelector('.toast-body');
    
    // Update toast content
    const icon = type === 'success' ? 'check' : 'alert-circle';
    toastBody.innerHTML = `<i data-feather="${icon}" class="me-2"></i>${message}`;
    
    // Update toast styling
    toastElement.className = `toast ${type === 'error' ? 'text-bg-danger' : 'text-bg-success'}`;
    
    // Replace feather icons
    feather.replace();
    
    // Show toast
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}

// URL validation helper
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        try {
            new URL('https://' + string);
            return true;
        } catch (_) {
            return false;
        }
    }
}

// Add URL validation to shorten form and code validation to retrieve form
document.addEventListener('DOMContentLoaded', function() {
    const urlInput = document.querySelector('input[name="url"]');
    const shortenForm = document.querySelector('form[action*="shorten"]');
    
    if (urlInput && shortenForm) {
        shortenForm.addEventListener('submit', function(e) {
            const url = urlInput.value.trim();
            
            if (url && !isValidURL(url)) {
                e.preventDefault();
                urlInput.classList.add('is-invalid');
                showToast('Please enter a valid URL', 'error');
            }
        });
        
        urlInput.addEventListener('input', function() {
            const url = this.value.trim();
            
            if (url && isValidURL(url)) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else if (url) {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-valid', 'is-invalid');
            }
        });
    }
    
    // Add code validation for retrieve form
    const codeInput = document.querySelector('input[name="code"]');
    const retrieveForm = document.querySelector('form[action*="retrieve"]');
    
    if (codeInput && retrieveForm) {
        // Convert input to uppercase and filter non-alphabetic characters
        codeInput.addEventListener('input', function() {
            let value = this.value.replace(/[^A-Za-z]/g, '').toUpperCase();
            this.value = value;
            
            if (value && /^[A-Z]+$/.test(value)) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else if (value) {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-valid', 'is-invalid');
            }
        });
        
        retrieveForm.addEventListener('submit', function(e) {
            let code = codeInput.value.trim();
            if (code.startsWith('#')) {
                code = code.substring(1);
            }
            
            if (code && !/^[A-Z]+$/.test(code)) {
                e.preventDefault();
                codeInput.classList.add('is-invalid');
                showToast('Code must contain only capital letters (A-Z)', 'error');
            }
        });
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to submit active form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const activeElement = document.activeElement;
        const form = activeElement.closest('form');
        
        if (form) {
            form.submit();
        }
    }
    
    // Escape to clear active input
    if (e.key === 'Escape') {
        const activeElement = document.activeElement;
        
        if (activeElement.tagName === 'INPUT') {
            activeElement.blur();
        }
    }
});

// Smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add loading states to buttons
function addLoadingState(button) {
    const originalContent = button.innerHTML;
    button.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Loading...';
    button.disabled = true;
    
    return function removeLoadingState() {
        button.innerHTML = originalContent;
        button.disabled = false;
        feather.replace();
    };
}

// Enhanced form submission with loading states
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                addLoadingState(submitButton);
            }
        });
    });
});
