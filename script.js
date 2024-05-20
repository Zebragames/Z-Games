document.addEventListener('DOMContentLoaded', () => {
    const screens = document.querySelectorAll('.screen');
    let currentScreen = 0;

    // Function to show the next screen
    const showNextScreen = () => {
        if (currentScreen < screens.length - 1) {
            screens[currentScreen].style.display = 'none';
            currentScreen++;
            screens[currentScreen].style.display = 'flex';
        }
    };

    // Initialize by hiding all screens except the first
    screens.forEach((screen, index) => {
        if (index !== 0) {
            screen.style.display = 'none';
        }
    });

    // Add click event to advance screens
    screens.forEach(screen => {
        screen.addEventListener('click', showNextScreen);
    });

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userId = document.getElementById('userId').value;
        const password = document.getElementById('password').value;

        if (userId === 'XYZGAMES' && password === 'Ruby123') {
            showNextScreen();
        } else {
            alert('Invalid ID or Password');
        }
    });
});