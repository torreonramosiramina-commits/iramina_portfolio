// app_ira.js

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll using Intersection Observer
const animatedElements = document.querySelectorAll('.animate__animated');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate__fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));

// Optional floating flower particles animation
function createFlowerParticles() {
    const colors = ['#ff77b7','#ff4da6','#ffe6f0','#ffc0cb'];
    for(let i=0; i<30; i++) {
        const flower = document.createElement('div');
        flower.style.position = 'fixed';
        flower.style.width = '12px';
        flower.style.height = '12px';
        flower.style.background = colors[Math.floor(Math.random()*colors.length)];
        flower.style.borderRadius = '50%';
        flower.style.top = Math.random()*window.innerHeight+'px';
        flower.style.left = Math.random()*window.innerWidth+'px';
        flower.style.opacity = 0.7;
        flower.style.zIndex = 0;
        flower.style.pointerEvents = 'none';
        document.body.appendChild(flower);
        animateFlower(flower);
    }
}

function animateFlower(flower){
    let x = parseFloat(flower.style.left);
    let y = parseFloat(flower.style.top);
    let directionX = Math.random() < 0.5 ? -1 : 1;
    let directionY = 1;
    setInterval(()=>{
        y += 0.3*directionY;
        x += 0.2*directionX;
        if(y > window.innerHeight){ y = -20; x = Math.random()*window.innerWidth; }
        flower.style.top = y+'px';
        flower.style.left = x+'px';
    },16);
}

createFlowerParticles();
