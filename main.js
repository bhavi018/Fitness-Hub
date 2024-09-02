// JavaScript for Mobile Menu Toggle and Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle mobile menu visibility
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted successfully!');
        });
    }
});

// Mock data for existing users (for demo purposes)
const users = [
    { username: "john_doe", password: "12345" },
    { username: "jane_doe", password: "password" }
];

// Function to handle login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Check if the entered credentials match any of the existing users
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        message.textContent = "Login successful!";
        message.className = "text-green-500 text-center mt-4";
        // Redirect to another page or perform additional actions here
        // Example: window.location.href = "dashboard.html";
    } else {
        message.textContent = "Invalid username or password!";
        message.className = "text-red-500 text-center mt-4";
    }
}

// Function to show the signup form
function showSignup() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("forgotPasswordForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("message").textContent = "";
}

// Function to show the login form
function showLogin() {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("forgotPasswordForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("message").textContent = "";
}

// Function to handle signup
function signup() {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const message = document.getElementById("message");

    // Check if the username already exists
    const userExists = users.some(user => user.username === newUsername);

    if (userExists) {
        message.textContent = "Username already taken!";
        message.className = "text-red-500 text-center mt-4";
    } else {
        // Add the new user to the users array
        users.push({ username: newUsername, password: newPassword });
        message.textContent = "Signup successful! Please log in.";
        message.className = "text-green-500 text-center mt-4";

        // Show login form and hide signup form
        document.getElementById("signupForm").classList.add("hidden");
        document.getElementById("loginForm").classList.remove("hidden");
    }
}

// Function to show the forgot password form
function showForgotPassword() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("forgotPasswordForm").classList.remove("hidden");
    document.getElementById("message").textContent = "";
}

// Function to handle password reset
function resetPassword() {
    const forgotUsername = document.getElementById("forgotUsername").value;
    const message = document.getElementById("message");

    // For simplicity, this demo does not implement actual password reset logic.
    // In a real application, you'd send a reset link to the user's email or similar.
    // Here we'll just show a placeholder message.
    if (users.some(user => user.username === forgotUsername)) {
        message.textContent = "Password reset instructions have been sent to your email!";
        message.className = "text-green-500 text-center mt-4";
    } else {
        message.textContent = "Username not found!";
        message.className = "text-red-500 text-center mt-4";
    }
}