
// Select all buttons inside .nav-bg
const buttons = document.querySelectorAll('.nav-bg div');

buttons.forEach(btn => {
    // Store original onclick
    const originalClick = btn.onclick;

    // Replace onclick with delayed version
    btn.onclick = function(e) {
        e.preventDefault(); // prevent immediate execution

        setTimeout(() => {
            if (originalClick) {
                originalClick.call(btn, e); // call original onclick after delay
            }
        }, 250); // delay in milliseconds (0.25s)
    }
});

// hire bubble
  const bubble = document.querySelector('.hire-bubble');
  const contactDiv = document.getElementById('contact-btn');

  function placeBubble() {
      const rect = contactDiv.getBoundingClientRect();
      bubble.style.left = rect.left + rect.width / 2 + 'px';
      bubble.style.top = rect.top + 'px';
  }

  window.addEventListener('load', placeBubble);
  window.addEventListener('resize', placeBubble);
  
// Floating texts
// Generate floating texts
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.floating-text');
  const words = ["AI","ME","CODE","FUTURE","DREAM","DATA","TECH","VISION"];
  const numTexts = 50;

  for (let i = 0; i < numTexts; i++) {
    const span = document.createElement('span');
    span.textContent = words[Math.floor(Math.random() * words.length)];
    
    span.style.top = Math.random() * 100 + "%";
    span.style.left = Math.random() * 100 + "%";
    span.style.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
    span.style.fontSize = `${Math.random() * 1.2 + 0.8}rem`;
    
    span.style.animationDuration = `${Math.random() * 15 + 5}s`;
    span.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(span);
  }
});

// Enter site
function enterSite() {
  document.getElementById('overlay').classList.add('hidden');
  document.getElementById('content').src = 'home.html';
}