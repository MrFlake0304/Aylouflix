window.addEventListener('scroll', function() {
        const titre = document.querySelector('h1');
        const slogan = document.querySelector('.slogan')
        const scroll = window.scrollY;

        if (scroll > 100) {
            titre.style.fontSize = '70px';
            slogan.style.fontSize = '15px'
            titre.style.transition = 'font-size 0.3s ease';
        } else {
            titre.style.fontSize = '220px';
            slogan.style.fontSize = '25px'
            titre.style.transition = 'font-size 0.3s ease';
        }
    });