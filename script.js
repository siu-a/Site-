const card = document.getElementById('card');
const body = document.body;

body.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 15;
    let y = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
});

body.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

body.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

const buttons = document.querySelectorAll('.social-icon');
buttons.forEach(btn => {
    btn.addEventListener('mouseleave', () => {
        btn.style.backgroundColor = '';
    });
});
const card = document.getElementById('card');
const body = document.body;

body.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 15;
    let y = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
});

body.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

body.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

const buttons = document.querySelectorAll('.social-icon');
buttons.forEach(btn => {
    btn.addEventListener('mouseleave', () => {
        btn.style.backgroundColor = '';
    });
});