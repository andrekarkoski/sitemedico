document.addEventListener("DOMContentLoaded", function(){

    window.addEventListener('scroll', function() {

        if (window.scrollY > 0) {
            document.getElementById('menu').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('menu').classList.remove('fixed-top');
             // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

(function () {
    var menu = document.getElementById('menu');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menuFixo');
        else menu.classList.remove('menuFixo');
    });
})();