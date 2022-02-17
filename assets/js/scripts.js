const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkMode = 'dark-mode';

function changeMode() {
    changeClasses();
    changeTexts();
}

function changeTexts() {
    if(button.classList.contains('dark-mode')) {
        button.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark Mode ON';
        return;
    }

    button.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Light Mode ON'

}

function changeClasses() {
    body.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
};

button.addEventListener('click', changeMode);

