
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault(); 
        const targetId = button.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId); 
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth' 
            });
        }
    });
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100); 
    }
});


const toggleButton = document.querySelector('.toggle');
const root = document.documentElement;


if (localStorage.getItem('dark-mode') === 'enabled') {
    root.classList.add('dark-mode');
    toggleButton.innerHTML = '<i class="bx bx-sun"></i>';
} else {
    root.classList.remove('dark-mode');
    toggleButton.innerHTML = '<i class="bx bx-moon"></i>'; 
}

toggleButton.addEventListener('click', () => {
    const isDarkMode = root.classList.contains('dark-mode');
    
    if (isDarkMode) {
        root.classList.remove('dark-mode');
        toggleButton.innerHTML = '<i class="bx bx-moon"></i>'; 
        localStorage.setItem('dark-mode', 'disabled'); 
    } else {
        root.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="bx bx-sun"></i>'; 
        localStorage.setItem('dark-mode', 'enabled'); 
    }
});
