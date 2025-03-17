// contact.js
const CONFIG = {
    development: {
        apiUrl: `http://localhost:${window.API_PORT || 3001}` 
    },
    production: {
        apiUrl: 'https://website-backend-zkf9.onrender.com'
    }
};

const ENVIRONMENT = window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' 
                   ? 'development'
                   : 'production';

const API_URL = CONFIG[ENVIRONMENT].apiUrl;

async function testServer() {
    try {
        const response = await fetch(`${API_URL}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            credentials: 'same-origin' // Changed from 'include' to 'same-origin'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return true;
    } catch (error) {
        console.warn('Server connection test failed:', error);
        return false;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const form = document.getElementById('contact-form');
    const loading = document.getElementById('loading');
    const formMessage = document.getElementById('form-message');

    // Test server connection
    const isServerConnected = await testServer();
    if (!isServerConnected) {
        formMessage.textContent = 'Unable to connect to server. Please try again later.';
        formMessage.style.color = 'red';
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        loading.style.display = 'flex';
        formMessage.textContent = '';

        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                credentials: 'same-origin', // Changed from 'include' to 'same-origin'
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                formMessage.textContent = data.message;
                formMessage.style.color = 'green';
                form.reset();
            } else {
                formMessage.textContent = data.message || 'An error occurred. Please try again.';
                formMessage.style.color = 'red';
            }
        } catch (error) {
            console.error('Form submission error:', error);
            formMessage.textContent = 'Connection error. Please try again later.';
            formMessage.style.color = 'red';
        } finally {
            loading.style.display = 'none';
        }
    });
});