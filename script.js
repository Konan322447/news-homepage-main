
const navMenu = document.querySelector('.nav-links');
const overlay = document.querySelector('.mobile-cover');
const openMenu = document.getElementById('menuOpen');
const closeMenu = document.getElementById('menuClose');

openMenu.addEventListener('click', () =>{
    navMenu.style.right = '0';
    navMenu.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () =>{
    navMenu.style.right = '-75dvw';
    navMenu.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});