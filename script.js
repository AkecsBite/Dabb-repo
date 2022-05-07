
const toggleButton = document.getElementsByClassName('toggle_button')[0]

const navbarlinks = document.getElementsByClassName('navbar_links')[0]

toggleButton.addEventListener('click', () => {navbarlinks.classList.toggle('active')})