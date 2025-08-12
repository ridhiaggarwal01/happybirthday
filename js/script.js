// Canvas hearts animation
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
for (let i = 0; i < 50; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 1 + 0.5
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'pink';
  hearts.forEach(h => {
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y -= h.speed;
    if (h.y < 0) h.y = canvas.height;
  });
  requestAnimationFrame(drawHearts);
}
drawHearts();

// Envelope click
const envelope = document.getElementById('envelope');
const photoDisplay = document.getElementById('photo-display');
let showingPhoto1 = true;
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  setInterval(() => {
    showingPhoto1 = !showingPhoto1;
    photoDisplay.src = showingPhoto1 ? 'images/photo1.jpg' : 'images/photo2.jpg';
  }, 3000);
});

// Typewriter effect
const message = "Happy Birthday my love ❤️ You mean the world to me!";
let i = 0;
function typeWriter() {
  if (i < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    typeWriter();
  }
});
