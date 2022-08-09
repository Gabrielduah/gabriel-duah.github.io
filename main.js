let nav = document.querySelector('nav');
let openMenu = document.querySelector('#open-menu-btn')
let closeMenu = document.querySelector('#close-menu-btn')
let navMenu = document.querySelector('.nav-menu')

window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 0)
})

openMenu.addEventListener('click', () => {
    navMenu.style.display = 'block';
    closeMenu.style.display = 'inline-block';
    openMenu.style.display= 'none'
})


//writing the close menu function
const closeNav = () => {
    navMenu.style.display = 'none';
    closeMenu.style.display = 'none';
    openMenu.style.display= 'inline-block'
}
closeMenu.addEventListener('click', closeNav);

//close nav menu when menu item is clicked
if(window.innerWidth < 1024) {
    document.querySelectorAll('.nav-menu li a ').forEach(navItem => {
        navItem.addEventListener('click', closeNav)
    })
}

