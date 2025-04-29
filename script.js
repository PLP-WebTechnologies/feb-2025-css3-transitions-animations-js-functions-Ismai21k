// script.js

// Animate button on click
document.getElementById("animateBtn").addEventListener('click', () => {
    const button = document.getElementById("animateBtn");
    button.classList.add("animate");
  
    // Remove the class after animation ends to allow re-trigger
    setTimeout(() => {
      button.classList.remove("animate");
    }, 600); // match the transition duration
  });
  
  // Save favorite color to localStorage
  document.getElementById("saveColorBtn").addEventListener('click', () => {
    const color = document.getElementById("favColor").value;
    localStorage.setItem("favoriteColor", color);
    alert("Color saved!");
  });
  
  // Load favorite color from localStorage on page load
  window.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("favoriteColor");
    if (savedColor) {
      document.getElementById("welcomeMessage").style.color = savedColor;
    }
  });
  