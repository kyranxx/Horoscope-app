document.addEventListener('DOMContentLoaded', () => {
    // Začať button scrolls to selection panel
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
                alert('Prosím, vyberte svoje znamenie');
                zodiacSelect.focus();
                return;
            }
            
            // In a real app, this would trigger the payment process
            // For now, just show a message
            alert('V plnej verzii by sa pripojilo k platobnému systému');
            
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
            <h3>Platba úspešná!</h3>
            <p>Váš personalizovaný horoskop sa generuje...</p>
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
                border-radius: 8px;
                padding: 24px;
                text-align: center;
                z-index: 1000;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                max-width: 360px;
                width: 90%;
            }
            
            .success-icon {
                background: var(--success);
                color: white;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                margin: 0 auto 16px;
            }
            
            .loading-spinner {
                width: 32px;
                height: 32px;
                border: 3px solid rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                border-top-color: var(--accent-color);
                animation: spin 1s linear infinite;
                margin: 16px auto 0;
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
            alert('V plnej verzii by sa tu zobrazil vygenerovaný horoskop');
        }, 3000);
    }
});
