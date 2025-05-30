// Certificate Modal Functions
function openCertificateModal(imageSrc, title, description) {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add fade in animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificateModal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Close modal when clicking the X button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCertificateModal);
    }
    
    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeCertificateModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeCertificateModal();
        }
    });
    
    // Add smooth transition to modal
    if (modal) {
        modal.style.transition = 'opacity 0.3s ease-in-out';
    }
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('certificateModal');
    if (modal.style.display === 'block') {
        // Allow tab navigation within modal
        if (event.key === 'Tab') {
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        }
    }
});
