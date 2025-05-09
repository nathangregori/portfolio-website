// Dynamic Typewriter Effect
const dynamicText = document.getElementById('dynamic-text');
const words = ['Nathan', 'a Developer', 'a Tech Enthusiast'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!isDeleting && charIndex <= currentWord.length) {
    dynamicText.textContent = currentWord.substring(0, charIndex++);
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex >= 0) {
    dynamicText.textContent = currentWord.substring(0, charIndex--);
    setTimeout(typeEffect, 100);
  } else if (!isDeleting && charIndex > currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 500);
  } else {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();