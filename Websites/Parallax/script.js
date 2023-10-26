let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let text = document.getElementById('text');
let btn = document.getElementById("btn");
let header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountain1.style.top = value * 0.5 + 'px';
    mountain2.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});