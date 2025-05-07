const today = new Date();


const year = document.querySelector("#currentyear");
year.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.nav-links');
    
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
        hamButton.classList.toggle('open');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 600) {
                navigation.classList.remove('active');
                hamButton.classList.remove('open');
            }
        });
    });
    
});