
const navMenu = document.querySelector('.nav-links');
const overlay = document.querySelector('.mobile-cover');
const openMenu = document.getElementById('menuOpen');
const closeMenu = document.getElementById('menuClose');

openMenu.addEventListener('click', () =>{
    navMenu.style.right = '0';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () =>{
    navMenu.style.right = '-71dvw';
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});