let nav = document.querySelector('nav');
let link = document.querySelectorAll('li a');

window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY <= 650) {
        nav.style.paddingTop = '5em';
        nav.style.backgroundColor = 'transparent';
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = '	#FFFFFF';
        };
    } else {
        nav.style.backgroundColor = 'rgb(67, 80, 165, .9)';
        nav.style.padding = '1em 0 1em 0';
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = '	#FFFFFF';
        };
    }
});