document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const submitText = submitBtn.querySelector('.submit-text');
        const loadingSpinner = submitBtn.querySelector('.loading-spinner');
        const formMessage = document.getElementById('formMessage');
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            submitText.textContent = 'Sending...';
            loadingSpinner.style.display = 'inline-block';
            submitBtn.disabled = true;
            formMessage.style.display = 'none';
            
            try {
                const formData = {
                    name: contactForm.name.value,
                    email: contactForm.email.value,
                    subject: contactForm.subject.value,
                    message: contactForm.message.value,
                    social_media: contactForm.social_media.value
                };
                
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                const data = await response.json();
                
                if (!response.ok) {
                    throw new Error(data.message || 'Failed to send message');
                }
                
                // Show success message
                formMessage.textContent = data.message;
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
            } catch (error) {
                console.error('Error:', error);
                formMessage.textContent = error.message || 'An error occurred. Please try again.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            } finally {
                // Reset button state
                submitText.textContent = 'Send Message';
                loadingSpinner.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }
});
