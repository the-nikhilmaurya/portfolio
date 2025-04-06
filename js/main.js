// Toggle button event listener
// document.querySelector('.theme-toggle').addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme');
// });

// main.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.theme-toggle');
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
  
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      const socialIcons = document.querySelectorAll('.social-links img');
        console.log("1111111",socialIcons)
        socialIcons.forEach((img) => {

            img.style.filter = isDark ? 'invert(1) brightness(1.5)' : 'invert(0)';
        });
    });
  
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  });
  
