'use strict';


(function() {


// Cuando hago CLICK en .header__button, .header__nav LE TOGGLE active
    const headerButton = document.querySelector('.header__button');
    const headerNav = document.querySelector('.header__nav');

    console.log(headerButton);
    console.log(headerNav);

    headerButton.addEventListener('click', function() {
        headerNav.classList.toggle('isActive');
    });

    // Carrusel de proyectos
    const designBtn = document.querySelectorAll('.design__btn');
    const designWrapper = document.querySelector('.design__wrapper');
    const designProject = document.querySelectorAll('.design__project');

    console.log(designBtn);
    console.log(designWrapper);
    console.log(designProject);

    designBtn.forEach(function(eachBtn, index) {
        designBtn[index].addEventListener('click', function() {
            designBtn.forEach(function(eachBtn, index) {
                designBtn[index].classList.remove('isActive');
            });

            designBtn[index].classList.add('isActive');

            let calculo = index * (100 / designProject.length);

            designWrapper.style.transform = `translateX(${-calculo}%)`;
        });
    });

// Carrusel automático imágenes
    const carrousel = document.querySelector('.carrousel');
    let scrollAmount = 0;
    const speed = 2; // Velocidad de las imágenes
    
    function scrollRight() {
        scrollAmount += speed;
        carrousel.style.transform = `translateX(-${scrollAmount}px)`;
        
        // Al llegar al final, vuelve a empezar el desplazamiento
        if (scrollAmount >= carrousel.scrollWidth - carrousel.clientWidth) {
            scrollAmount = 0;
            
        }
        
        requestAnimationFrame(scrollRight);
    }
    
    // Iniciar el desplazamiento horizontal
    scrollRight();
    
})()









