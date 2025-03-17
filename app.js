document.addEventListener('DOMContentLoaded', () => {
    // Get Started button scrolls to selection panel
    const getStartedBtn = document.querySelector('.hero .gradient-button');
    const selectionPanel = document.querySelector('.selection-panel');
    
    if (getStartedBtn && selectionPanel) {
        getStartedBtn.addEventListener('click', () => {
            selectionPanel.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Form validation
    const paymentButton = document.querySelector('.payment-button');
    const zodiacSelect = document.getElementById('zodiac-sign');
    
    if (paymentButton && zodiacSelect) {
        paymentButton.addEventListener('click', () => {
            if (zodiacSelect.value === '') {
                alert('Please select your zodiac sign');
                zodiacSelect.focus();
                return;
            }
            
            // Check if at least one focus area is selected
            const focusCheckboxes = document.querySelectorAll('input[name="focus"]:checked');
            if (focusCheckboxes.length === 0) {
                alert('Please select at least one focus area');
                return;
            }
            
            // In a real app, this would trigger the payment process
            // For now, just show a message
            alert('This would connect to a payment processor in the full version');
            
            // Simulate successful payment for demo purposes
            showSuccessMessage();
        });
    }
    
    function showSuccessMessage() {
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-icon">✓</div>
            <h3>Payment Successful!</h3>
            <p>Your personalized horoscope is being generated...</p>
            <div class="loading-spinner"></div>
        `;
        
        // Add styles for the success message
        const style = document.createElement('style');
        style.textContent = `
            .success-message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 30px;
                text-align: center;
                z-index: 1000;
                box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
                max-width: 400px;
                width: 90%;
            }
            
            .success-icon {
                background: var(--success);
                color: white;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                margin: 0 auto 20px;
            }
            
            .loading-spinner {
                width: 40px;
                height: 40px;
                border: 4px solid rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                border-top-color: var(--accent-gradient);
                animation: spin 1s linear infinite;
                margin: 20px auto 0;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(successMessage);
        
        // Remove the message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
            // In a real app, this would show the generated horoscope
            alert('In the full version, the AI-generated horoscope would appear here');
        }, 3000);
    }
});
